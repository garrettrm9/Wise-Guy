import React, { Component } from "react";
import BuildJokes from "./BuildJokes";

class BuildJokesList extends Component {
  constructor(props) {
    super(props);
    this.renderJokes = this.renderJokes.bind(this);
  }

  renderJokes(joke, index) {
    return (
      <BuildJokes
        joke={joke}
        index={index}
        deleteJoke={this.props.deleteJoke}
        editJoke={this.props.editJoke}
      />
    );
  }

  render() {
    const jokes = this.props.jokes.map(this.renderJokes);
    return (
      <div className="jokes_container">
        <div className="jokes_list">{jokes}</div>
      </div>
    );
  }
}

export default BuildJokesList;
