import noimg from '../MovieCard/noimg.png';

export default class ApiService {
  _apiBase = `https://api.themoviedb.org/3/`;

  _apiImg = `https://image.tmdb.org/t/p/original`;

  _options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTZmMTZkYTdhYzUwNmY2NWEzYTIxZmYyZTY3MWMzMCIsInN1YiI6IjY1MjgwNmUzMWYzZTYwMDBmZjg0N2JkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eCyuatovTMylls3DwByDpOX5YNu5nQhE6wZmhggwJIs',
    },
  };

  _testResult = {
    page: 1,
    results: [
      {
        id: 1,
        original_title: 'Batman',
        overview:
          'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
        poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        release_date: '1989-06-21',
        title: 'Batman',
        vote_average: 7.215,
      },
      {
        id: 2,
        original_title: 'Batman',
        overview:
          'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
        poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        release_date: '1989-06-21',
        title: 'Batman',
        vote_average: 7.215,
      },
      {
        id: 3,
        original_title: 'Batman',
        overview:
          'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
        poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        release_date: '1989-06-21',
        title: 'Batman',
        vote_average: 7.215,
      },
      {
        id: 4,
        original_title: 'Batman',
        overview:
          'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
        poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        release_date: '1989-06-21',
        title: 'Batman',
        vote_average: 7.215,
      },
      {
        id: 5,
        original_title: 'Batman',
        overview:
          'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
        poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        release_date: '1989-06-21',
        title: 'Batman',
        vote_average: 7.215,
      },
      {
        id: 6,
        original_title: 'Batman',
        overview:
          'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
        poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        release_date: '1989-06-21',
        title: 'Batman',
        vote_average: 7.215,
      },
      {
        id: 7,
        original_title: 'Batman',
        overview:
          'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
        poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        release_date: '1989-06-21',
        title: 'Batman',
        vote_average: 7.215,
      },
      {
        id: 8,
        original_title: 'Batman',
        overview:
          'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
        poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        release_date: '1989-06-21',
        title: 'Batman',
        vote_average: 7.215,
      },
      {
        id: 9,
        original_title: 'Batman',
        overview:
          'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
        poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        release_date: '1989-06-21',
        title: 'Batman',
        vote_average: 7.215,
      },
      {
        id: 10,
        original_title: 'Batman',
        overview:
          'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
        poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        release_date: '1989-06-21',
        title: 'Batman',
        vote_average: 7.215,
      },
      {
        id: 11,
        original_title: 'Batman',
        overview:
          'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
        poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        release_date: '1989-06-21',
        title: 'Batman',
        vote_average: 7.215,
      },
      {
        id: 12,
        original_title: 'Batman',
        overview:
          'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
        poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        release_date: '1989-06-21',
        title: 'Batman',
        vote_average: 7.215,
      },
      {
        id: 13,
        original_title: 'Batman',
        overview:
          'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
        poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        release_date: '1989-06-21',
        title: 'Batman',
        vote_average: 7.215,
      },
      {
        id: 14,
        original_title: 'Batman',
        overview:
          'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
        poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        release_date: '1989-06-21',
        title: 'Batman',
        vote_average: 7.215,
      },
      {
        id: 15,
        original_title: 'Batman',
        overview:
          'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
        poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        release_date: '1989-06-21',
        title: 'Batman',
        vote_average: 7.215,
      },
      {
        id: 16,
        original_title: 'Batman',
        overview:
          'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
        poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        release_date: '1989-06-21',
        title: 'Batman',
        vote_average: 7.215,
      },
      {
        id: 17,
        original_title: 'Batman',
        overview:
          'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
        poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        release_date: '1989-06-21',
        title: 'Batman',
        vote_average: 7.215,
      },
      {
        id: 18,
        original_title: 'Batman',
        overview:
          'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
        poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        release_date: '1989-06-21',
        title: 'Batman',
        vote_average: 7.215,
      },
      {
        id: 19,
        original_title: 'Batman',
        overview:
          'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
        poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        release_date: '1989-06-21',
        title: 'Batman',
        vote_average: 7.215,
      },
      {
        id: 20,
        original_title: 'Batman',
        overview:
          'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
        poster_path: '/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        release_date: '1989-06-21',
        title: 'Batman',
        vote_average: 7.215,
      },
    ],
    total_pages: 2,
    total_results: 25,
  };

  async getResource(url) {
    const res = await fetch(url, this._options);

    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, recieved: ${res.status}`);
    }

    return res.json();
  }

  async getMovie(url) {
    const res = await fetch(url, this._options);

    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, recieved: ${res.status}`);
    }

    return res.json();
  }

  getMovieImg(url) {
    if (!url) {
      return noimg;
    }
    const res = `${this._apiImg}${url}`;
    return res;
  }

  getAllMoviesTest() {
    return this._testResult;
  }

  getImg(url) {
    // в апи
    const img = this.getMovieImg(url).then((res) => res.url);
    if (!img.ok) {
      return '.';
    }
    return img;
  }

  async getAllMovies(movieName = '#', page = 1) {
    const result = await this.getResource(
      `${this._apiBase}search/movie?query=${movieName}&page=${page}`,
    ).then((res) => res);
    return result;
  }

  async getGenres() {
    const result = await this.getResource(`${this._apiBase}genre/movie/list?language=en`)
      .then((res) => res.genres)
      .catch((err) => err.name);
    return result;
  }

  async getMovieGenres(genreIds) {
    // возвращает массив с названиями жанров у одного фильма
    const result = await this.getGenres().then((genres) =>
      genreIds.map((id) => {
        const idx = genres.findIndex((el) => el.id === id);
        return genres[idx].name;
      }),
    );
    return result;
  }

  // eslint-disable-next-line class-methods-use-this
  async addRatedMovie(data) {
    const prevItems = JSON.parse(localStorage.getItem('ratedFilms'));
    if (!prevItems) {
      const ratedFilms = {
        page: 1,
        results: [data],
        total_pages: 1,
        total_results: 1,
      };
      localStorage.setItem('ratedFilms', JSON.stringify(ratedFilms));
    } else {
      const idx = prevItems.results.findIndex((el) => el.id === data.id);
      if (idx === -1) {
        const newResults = [...prevItems.results, data];
        const newTotalResults = prevItems.total_results + 1;
        const ratedFilms = { ...prevItems, total_results: newTotalResults, results: newResults };
        localStorage.setItem('ratedFilms', JSON.stringify(ratedFilms));
      } else {
        const newResults = prevItems.results.with(idx, data);
        const ratedFilms = { ...prevItems, results: newResults };
        localStorage.setItem('ratedFilms', JSON.stringify(ratedFilms));
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getRatedFilms() {
    const items = JSON.parse(localStorage.getItem('ratedFilms')).results;
    if (!items) {
      return [];
    }
    return items;
  }
}
