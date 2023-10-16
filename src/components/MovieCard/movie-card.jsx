import React from 'react';
import './movie-card.css';
import { format } from 'date-fns';
import noimg from './noimg.png';

import StarsRate from '../StarsRate';

function MovieCard(params) {
  function limitStr(str) {
    const newStr = str.split(' ').slice(0, 20).join(' ');
    return newStr.concat('...');
  }

  function getImg(url) {
    if (!url) {
      return noimg;
    }
    return `https://image.tmdb.org/t/p/original${url}`;
  }

  function formatDate(date) {
    if (!date) {
      return date;
    }
    return format(new Date(date), 'MMMM dd, yyyy');
  }

  const { data } = params;

  return (
    <div className="movie-card">
      <img src={getImg(data.poster_path)} alt="img" />
      <div className="movie-params">
        <h3 className="movie-title">{data.title}</h3>
        <p className="movie-date">{formatDate(data.release_date)}</p>
        <div className="movie-tags">
          <div className="tag">
            <span>Action</span>
          </div>
          <div className="tag">
            <span>Drama</span>
          </div>
        </div>
        <p className="movie-overview">{limitStr(data.overview)}</p>
        <StarsRate rate={data.vote_average} />
      </div>
    </div>
  );
}

export default MovieCard;
