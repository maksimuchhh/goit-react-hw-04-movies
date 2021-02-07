import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import MoviePreview from "./MoviePreview";
import styles from "./MovieList.module.css";

class MovieList extends Component {
  render() {
    const { movies, location } = this.props;
    return (
      <ul>
        {movies.map(
          ({
            id,
            title,
            backdrop_path,
            release_date,
            genre_ids,
            vote_average,
            overview,
          }) => {
            return (
              <li key={id}>
                <Link
                  to={{
                    pathname: `movies/${id}`,
                    state: {
                      from: location,
                      movie: {
                        id: id,
                        title: title,
                        img: backdrop_path,
                        descr: overview,
                        genre: genre_ids,
                        rating: vote_average,
                      },
                    },
                  }}
                >
                  <MoviePreview
                    title={title}
                    img={backdrop_path}
                    releaseDate={release_date}
                  />
                </Link>
              </li>
            );
          }
        )}
      </ul>
    );
  }
}
export default withRouter(MovieList);
