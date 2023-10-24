import React from 'react';

import ApiService from '../ApiService/api-service';

import MovieCard from '../MovieCard';
import ErrorIndicator from '../ErrorIndicator';

import MyPagination from '../Pagination';

export default class RatedContent extends React.Component {
  constructor() {
    super();
    this.state = {
      moviesList: null,
    };
    this.apiService = new ApiService();
  }

  componentDidMount() {
    this.getMoviesList();
  }

  getMoviesList = () => {
    try {
      const ratedList = this.apiService.getRatedFilms();
      if (ratedList.length !== 0)
        this.setState({
          moviesList: ratedList,
        });
    } catch (err) {
      this.setState({
        moviesList: null,
      });
      this.onError();
    }
  };

  onError = () => {
    this.setState({
      error: 'emptyData',
    });
  };

  changePage = (page) => {
    this.getMoviesList(page);
  };

  renderItems = () => {
    const { moviesList } = this.state;
    if (!moviesList) return null;
    return (
      <div className="movies-list">
        {moviesList.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </div>
    );
  };

  render() {
    const { moviesList, error } = this.state;

    const errorMessage = error ? <ErrorIndicator error={error} /> : null;
    const content = moviesList !== null ? this.renderItems() : null;
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
        {pagination}
      </>
    );
  }
}
