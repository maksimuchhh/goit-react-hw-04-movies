import React, { Component } from "react";
import MovieList from "../../components/MovieList";
import fetch from "../../fetch";
import Loader from "react-loader-spinner";

export default class HomePage extends Component {
  state = {
    movies: [],
    loading: false,
  };
  addRatingMovies = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        loading: true,
      };
    });
    fetch.topRating().then((data) =>
      this.setState({
        movies: data.results,
        loading: false,
      })
    );
  };
  componentDidMount() {
    this.addRatingMovies();
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <Loader type="ThreeDots" color="#00BFFF" height={40} width={40} />
        ) : (
          this.state.movies.length !== [] && (
            <MovieList movies={this.state.movies} />
          )
        )}
      </div>
    );
  }
}
