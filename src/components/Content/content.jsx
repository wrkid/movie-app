import React from 'react';

import { Spin } from 'antd';

import PropTypes from 'prop-types';

import MyPagination from '../Pagination';
import MovieCard from '../MovieCard';
import ApiService from '../ApiService';

import ErrorIndicator from '../ErrorIndicator';

export default class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      moviesList: null,
      error: false,
      loading: false,
    };
    this.apiService = new ApiService();
  }

  componentDidMount() {
    this.setState({
      moviesList: null,
      loading: false,
    });
    this.getMoviesList();
  }

  componentDidUpdate(prevProps) {
    const { title } = this.props;
    if (title !== prevProps.title) {
      this.setState({
        moviesList: null,
        loading: true,
      });
      this.getMoviesList();
    }
  }

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  getMoviesList = (page = 1) => {
    const { title } = this.props;
    if (!title) {
      return;
    }
    this.apiService
      .getAllMovies(title, page)
      .then((moviesList) => {
        if (moviesList.results.length !== 0) {
          this.setState(() => ({
            moviesList,
            error: false,
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
    });
  };

  changePage = (page) => {
    this.getMoviesList(page);
  };

  renderItems = () => {
    const { moviesList } = this.state;
    let renderedList = [];
    const ratedFilms = JSON.parse(localStorage.getItem('ratedFilms'));
    moviesList.results.forEach((movie) => {
      const idx = ratedFilms.results.findIndex((el) => el.id === movie.id);
      if (idx !== -1) {
        renderedList = [...renderedList, ratedFilms.results[idx]];
      } else {
        renderedList = [...renderedList, movie];
      }
    });

    return (
      <div className="movies-list">
        {renderedList.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </div>
    );
  };

  render() {
    const { moviesList, error, loading } = this.state;

    const errorMessage = error ? <ErrorIndicator error={error} /> : null;
    const spinner = !error && loading ? <Spin size="large" /> : null;
    const content = !error && moviesList !== null ? this.renderItems() : null;
    const pagination =
      !error && content !== null ? (
        <MyPagination
          changePage={(page) => this.changePage(page)}
          total={moviesList.total_results}
        />
      ) : null;

    return (
      <>
        {content}
        {errorMessage}
        {spinner}
        {pagination}
      </>
    );
  }
}

Content.defaultProps = {
  title: '',
};

Content.propTypes = {
  title: PropTypes.string,
};
