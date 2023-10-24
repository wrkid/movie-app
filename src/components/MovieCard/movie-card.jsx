import React from 'react';
import './movie-card.css';

import { format } from 'date-fns';

import { Rate } from 'antd';

import ApiService from '../ApiService';

import MovieGenres from '../MovieGenres';

function MovieCard(params) {
  const apiService = new ApiService();

  function limitStr(str) {
    const newStr = str.split(' ').slice(0, 10).join(' ');
    return newStr.concat('...');
  }

  function getImg(url) {
    return apiService.getMovieImg(url);
  }

  function formatDate(date) {
    if (!date) {
      return date;
    }
    return format(new Date(date), 'MMMM dd, yyyy');
  }

  const { data } = params;

  function addRatedMovie(value) {
    const myRaiting = value;
    data.myRaiting = myRaiting;
    apiService.addRatedMovie(data);
  }

  const { myRaiting = 0 } = data;

  function isDisabled() {
    if (myRaiting) {
      return true;
    }
    return false;
  }

  let styleVoteAverage = {
    border: '2px solid #E90000',
  };

  if (data.vote_average <= 3) {
    styleVoteAverage = {
      border: '2px solid #E90000',
    };
  } else if (data.vote_average <= 5) {
    styleVoteAverage = {
      border: '2px solid #E97E00',
    };
  } else if (data.vote_average <= 7) {
    styleVoteAverage = {
      border: '2px solid #E9D100',
    };
  } else {
    styleVoteAverage = {
      border: '2px solid #66E900',
    };
  }

  return (
    <div className="movie-card">
      <img src={getImg(data.poster_path)} alt="img" />
      <div className="movie-params">
        <h3 className="movie-title">{data.title}</h3>
        <div className="voteAverage" style={styleVoteAverage}>
          <span>{data.vote_average.toFixed(1)}</span>
        </div>
        <p className="movie-date">{formatDate(data.release_date)}</p>
        <MovieGenres genreIds={data.genre_ids} />
        <p className="movie-overview">{limitStr(data.overview)}</p>
        <Rate
          allowHalf
          value={myRaiting}
          disabled={isDisabled()}
          count={10}
          style={{ fontSize: 14 }}
          onChange={(value) => addRatedMovie(value)}
        />
      </div>
    </div>
  );
}

export default MovieCard;
