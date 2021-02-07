import React, { Component } from "react";

export default class index extends Component {
  state = {
    query: "",
  };
  render() {
    return (
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          this.setState({ query: "" });
          this.props.onSubmit(this.state.query);
        }}
      >
        <input
          onChange={(evt) => {
            this.setState({ query: evt.target.value });
          }}
          placeholder="Type smth..."
          value={this.state.query}
        />
        <button typeof="submit">Search</button>
      </form>
    );
  }
}
