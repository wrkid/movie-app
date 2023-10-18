export default class ApiService {
  _apiBase = `https://api.themoviedb.org/3/search/movie?query=`;

  _options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTZmMTZkYTdhYzUwNmY2NWEzYTIxZmYyZTY3MWMzMCIsInN1YiI6IjY1MjgwNmUzMWYzZTYwMDBmZjg0N2JkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eCyuatovTMylls3DwByDpOX5YNu5nQhE6wZmhggwJIs',
    },
  };

  async getResource(url) {
    const res = await fetch(url, this._options);

    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, recieved: ${res.status}`);
    }

    return res.json();
  }

  async getAllMovies(movieName = '#', page = 1) {
    const result = await this.getResource(`${this._apiBase}${movieName}&page=${page}`).then(
      (res) => res,
    );
    return result;
  }

  // getPagesAmount

  // getMoviesOnPage(page)
}
