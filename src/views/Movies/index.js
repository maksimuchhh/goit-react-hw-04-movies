import React, { Component } from "react";
import fetch from "../../fetch";
import SearchForm from "../../components/SearchForm";
import MovieList from "../../components/MovieList";
import Loader from "react-loader-spinner";

export default class Movies extends Component {
  state = {
    movies: [],
    loading: false,
  };
  onSubmit = (query) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        loading: true,
      };
    });
    return fetch
      .searchMovie(query)
      .then(({ results }) => {
        return this.setState({
          movies: results,
        });
      })
      .finally(() =>
        this.setState((prevState) => {
          return {
            ...prevState,
            loading: false,
          };
        })
      );
  };
  render() {
    return (
      <>
        <h2>Top rating films</h2>
        <SearchForm onSubmit={this.onSubmit} />
        {this.state.loading ? (
          <Loader type="ThreeDots" color="#00BFFF" height={40} width={40} />
        ) : (
          <MovieList movies={this.state.movies} />
        )}
      </>
    );
  }
}
