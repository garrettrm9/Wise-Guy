import React, { Component } from "react";
import RoutineJoke from "./RoutineJoke";

class RoutineJokesList extends Component {
  constructor(props) {
    super(props);
    this.renderJokes = this.renderJokes.bind(this);
  }

  componentWillMount() {
    this.props.getRoutineJokes(this.props.oneRoutine.id);
  }

  renderJokes(joke, index) {
    return (
      <RoutineJoke
        joke={joke}
        index={index}
        deleteRoutineJoke={this.props.deleteRoutineJoke}
        oneRoutine={this.props.oneRoutine}
      />
    );
  }

  render() {
    const jokes = this.props.routineJokes.map(this.renderJokes);
    return (
      <div className="build_jokes_container">
        <h2>Routine {this.props.oneRoutine.name} has the following jokes:</h2>
        <div className="jokes_list">{jokes}</div>
      </div>
    );
  }
}

export default RoutineJokesList;
