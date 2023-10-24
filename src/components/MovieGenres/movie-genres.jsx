import React from 'react';

import PropTypes from 'prop-types';

import ApiService from '../ApiService';

export default class MovieGenres extends React.Component {
  apiService = new ApiService();

  constructor() {
    super();
    this.state = {
      tagsList: null,
    };
  }

  componentDidMount() {
    const { genreIds } = this.props;
    this.getItems(genreIds);
  }

  getItems = (tags) => {
    this.apiService
      .getMovieGenres(tags)
      .then((res) => {
        this.setState({
          tagsList: res,
          error: false,
        });
      })
      .catch((err) => {
        this.onError(err);
      });
  };

  onError = (err) => {
    this.setState({
      error: err,
    });
  };

  renderItems = () => {
    const { tagsList } = this.state;
    if (tagsList) {
      return tagsList.map((tag) => (
        <div key={tag} className="tag">
          <span>{tag}</span>
        </div>
      ));
    }
    return null;
  };

  render() {
    const { error } = this.state;
    const failedTags = error ? <div className="tag">Failed to load genres</div> : null;
    return (
      <div className="movie-tags">
        {failedTags}
        {this.renderItems()}
      </div>
    );
  }
}

MovieGenres.defaultProps = {
  genreIds: [],
};
MovieGenres.propTypes = {
  genreIds: PropTypes.arrayOf(PropTypes.number),
};
