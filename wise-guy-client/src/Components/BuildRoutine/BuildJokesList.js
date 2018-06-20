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
        oneRoutine={this.props.oneRoutine}
        deleteJoke={this.props.deleteJoke}
        editJoke={this.props.editJoke}
        addJokeToRoutine={this.props.addJokeToRoutine}
        key={joke.id}
      />
    );
  }

  render() {
    const jokes = this.props.jokes.map(this.renderJokes);
    const firstName = this.props.user.first_name;
    const lastName = this.props.user.last_name;
    return (
      <div>
        <h2>
          All jokes written by {firstName} {lastName}:
        </h2>
        <div className="jokes_list">{jokes}</div>
      </div>
    );
  }
}

export default BuildJokesList;
