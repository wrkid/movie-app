import React from 'react';
import { Input, Tabs } from 'antd';
import debounce from 'lodash.debounce';

import Content from '../Content';
import RatedContent from '../RatedContent';

import './app.css';

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

    const movieappSearchContainer = (
      <div className="movieapp-container">
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

    const movieappRatedContainer = (
      <div className="rated-container">
        <RatedContent />
      </div>
    );

    return (
      <Tabs
        defaultActiveKey="1"
        destroyInactiveTabPane
        centered
        items={[
          {
            label: 'Search',
            key: '1',
            children: movieappSearchContainer,
          },
          {
            label: 'Rated',
            key: '2',
            children: movieappRatedContainer,
          },
        ]}
      />
    );
  }
}
