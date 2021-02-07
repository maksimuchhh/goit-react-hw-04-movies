import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import fetch from "../../fetch";
import CastItem from "../../components/CastItem";
import ReviewItem from "../../components/ReviewItem";
import Loader from "react-loader-spinner";
import styles from "./MovieDetails.module.css";

export default class MovieDetails extends Component {
  state = {
    movies: null,
  };
  componentDidMount() {
    if (!this.props.location.state || !this.props.location.state.movies) {
      fetch.getMovie(this.props.match.params.id).then((data) => {
        this.setState((prevState) => ({
          ...prevState,
          backdrop_path: data.backdrop_path,
          id: data.id,
          title: data.title,
          vote_average: data.vote_average,
          overview: data.overview,
          genres: [...data.genres],
        }));
      });
    } else {
      return;
    }
  }
  hideDetails = () => {
    this.props.history.push(`/movies/${this.state.id}`);
  };
  backToMovies = () => {
    this.props.history.push(this.props.location?.state?.from || "/movies");
  };
  render() {
    if (this.state.id) {
      const {
        id,
        backdrop_path,
        title,
        vote_average,
        overview,
        genres,
      } = this.state;
      return (
        <div className={styles.container}>
          <button
            className={styles.goBackBtn}
            onClick={this.backToMovies}
            type="button"
          >
            Go back
          </button>
          <img
            className={styles.photo}
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            alt={title}
          />
          <h3>{title}</h3>
          <p>Rating: {vote_average * 10}%</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>
            {genres.map((el) => {
              return (
                <span className={styles.genre} key={el.id}>
                  {el.name}
                </span>
              );
            })}
          </p>
          <hr />
          <Route exact path={`${this.props.match.path}/cast`}>
            <button
              className={styles.hideBtn}
              onClick={this.hideDetails}
              type="button"
            >
              Hide
            </button>
          </Route>
          <Route exact path={`${this.props.match.path}/reviews`}>
            <button
              className={styles.hideBtn}
              onClick={this.hideDetails}
              type="button"
            >
              Hide
            </button>
          </Route>

          <ul>
            <li className={styles.Links}>
              <Link
                to={{
                  pathname: `${this.props.match.url}/cast`,
                  state: {
                    movie: {
                      id: id,
                      title: title,
                      img: backdrop_path,
                      descr: overview,
                      genre: genres,
                      rating: vote_average,
                    },
                  },
                }}
              >
                Cast
              </Link>
              <Route exact path={`${this.props.match.path}/cast`}>
                <CastItem />
              </Route>
            </li>
            <li className={styles.Links}>
              <Link
                to={{
                  pathname: `${this.props.match.url}/reviews`,
                  state: {
                    movie: {
                      id: id,
                      title: title,
                      img: backdrop_path,
                      descr: overview,
                      genre: genres,
                      rating: vote_average,
                    },
                  },
                }}
              >
                Reviews
              </Link>
              <Route exact path={`${this.props.match.path}/reviews`}>
                <ReviewItem />
              </Route>
            </li>
          </ul>
          <hr />
        </div>
      );
    } else {
      return <Loader type="ThreeDots" color="#00BFFF" height={40} width={40} />;
    }
  }
}
