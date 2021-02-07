import { withRouter } from "react-router";
import fetch from "../../fetch";
import Loader from "react-loader-spinner";
import React, { Component } from "react";

class CastItem extends Component {
  state = {};
  reFetch = () => {
    fetch
      .getCast(this.props.match.params.id)
      .then((data) => this.setState({ cast: data.cast }))
      .catch((error) => console.log("Error in fetch!!!"));
  };
  componentDidMount() {
    this.reFetch();
  }
  render() {
    if (!this.state.cast) {
      return <Loader type="ThreeDots" color="#00BFFF" height={40} width={40} />;
    }
    return this.state.cast.map(({ character, profile_path, name, id }) => {
      return (
        <div key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${profile_path}`}
            alt={name}
          />
          <h3>{character}</h3>
          <h5>{name}</h5>
        </div>
      );
    });
  }
}

export default withRouter(CastItem);
