import React, { Component } from "react";
import Jokes from "./Jokes";

class JokesList extends Component {
  constructor(props) {
    super(props);
    this.renderJokes = this.renderJokes.bind(this);
  }

  renderJokes(joke, index) {
    return (
      <Jokes
        joke={joke}
        index={index}
        deleteJoke={this.props.deleteJoke}
        editJoke={this.props.editJoke}
        key={joke.id}
      />
    );
  }

  render() {
    const jokes = this.props.jokes.map(this.renderJokes);
    return <div>{jokes}</div>;
  }
}

export default JokesList;
