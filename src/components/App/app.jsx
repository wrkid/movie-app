import React from 'react';
import { Input, Spin } from 'antd';

import TabsBar from '../TabsBar';
import Content from '../Content';
import ErrorIndicator from '../ErrorIndicator';

import ApiService from '../ApiService';

import './app.css';
// Сделать отображение на мобилке!!
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      data: [],
      value: '',
      loading: false,
    };
    this.apiService = new ApiService();
  }

  getData = async (movieName) => {
    await this.apiService
      .getAllMovies(movieName)
      .then((movies) => {
        if (movies.length !== 0) {
          this.setState(() => ({
            error: false,
            data: movies,
            loading: false,
          }));
        } else {
          this.setState(() => ({ error: 'emptyData' }));
        }
      })
      .catch((err) => {
        this.onError(err);
      });
  };

  onError = (err) => {
    this.setState({
      error: err.name,
      loading: false,
    });
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    if (value.trim()) {
      this.setState({
        data: [],
        loading: true,
        error: false,
      });
      this.getData(value);
    }
    this.setState({
      value: '',
    });
  };

  render() {
    const { error, value, data, loading } = this.state;

    const errorMessage = error ? <ErrorIndicator error={error} /> : null;
    const content = !loading && !error ? <Content data={data} /> : null;
    const spinner = loading && !error ? <Spin size="large" /> : null;

    return (
      <div className="movieapp-container">
        <TabsBar />
        <form id="search_panel" onSubmit={(e) => this.handleSubmit(e)}>
          <Input
            id="search_panel"
            placeholder="Type to search..."
            value={value}
            onChange={(e) => this.handleChange(e)}
          />
        </form>
        {errorMessage}
        {content}
        {spinner}
      </div>
    );
  }
}
