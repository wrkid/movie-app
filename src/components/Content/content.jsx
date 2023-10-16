import React from 'react';

import PropTypes from 'prop-types';

import MyPagination from '../Pagination';
import MovieCard from '../MovieCard';

export default function Content({ data }) {
  if (data.length > 0) {
    return (
      <>
        <div className="movies-list">
          {data.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
        <MyPagination />
      </>
    );
  }
  return null;
}

Content.defaultProps = {
  data: [],
};

Content.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.arrayOf(PropTypes.any),
};
