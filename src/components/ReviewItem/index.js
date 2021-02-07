import { withRouter } from "react-router";
import fetch from "../../fetch";
import React, { Component } from "react";
import Loader from "react-loader-spinner";
class ReviewItem extends Component {
  state = {};
  reFetch = () => {
    fetch
      .getReviews(this.props.match.params.id)
      .then((data) =>
        this.setState({
          reviews: data.results,
        })
      )
      .catch((error) => console.log("Error in fetch!!!"));
  };
  componentDidMount() {
    this.reFetch();
  }
  render() {
    if (!this.state.reviews) {
      return <Loader type="ThreeDots" color="#00BFFF" height={40} width={40} />;
    }
    return this.state.reviews.map(({ id, author, content, url }) => {
      return (
        <div key={id}>
          <h4>{author}</h4>
          <p>{content}</p>
          <a target="_blank" href={url}>
            Открыть источник
          </a>
        </div>
      );
    });
  }
}

export default withRouter(ReviewItem);
