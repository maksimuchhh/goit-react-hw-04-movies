export default {
  api_key: "dfda1ac334db8869030d2ba181eff0df",
  searchMovie(query) {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${query}`
    ).then((response) => response.json());
  },
  topRating() {
    return fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${this.api_key}`
    ).then((response) => response.json());
  },
  getCast(movie_id) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${this.api_key}&language=en-US`
    ).then((response) => response.json());
  },
  getReviews(movie_id) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${this.api_key}&language=en-US&page=1`
    ).then((response) => response.json());
  },
  getMovie(movie_id) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${this.api_key}&language=en-US`
    ).then((response) => response.json());
  },
};
