import React from 'react';
import { Input } from 'antd';
import debounce from 'lodash.debounce';

import TabsBar from '../TabsBar';
import Content from '../Content';

import './app.css';
// Сделать отображение на мобилке!!
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: null,
      inputValue: null,
    };
    this.debouncedOnTitleEntered = debounce((title) => this.onTitleEnetered(title), 1000);
  }

  onTitleEnetered = (title) => {
    this.setState({
      title,
    });
  };

  handleChange = (e) => {
    const newValue = e.target.value;
    this.setState({
      inputValue: newValue,
    });
    if (newValue.trim()) {
      this.setState({
        title: null,
      });
      this.debouncedOnTitleEntered(newValue.trim());
    }
  };

  render() {
    const { inputValue, title } = this.state;

    return (
      <div className="movieapp-container">
        <TabsBar />
        <form id="search_panel" onSubmit={(e) => e.preventDefault()}>
          <Input
            id="search_panel"
            placeholder="Type to search..."
            value={inputValue}
            onChange={(e) => this.handleChange(e)}
          />
        </form>
        <Content title={title} />
      </div>
    );
  }
}
