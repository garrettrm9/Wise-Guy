import React, { Component } from "react";
import BuildJokesList from "./BuildJokesList";
import JokesForm from "../Jokes/JokesForm";
import RoutineJokesList from "./RoutineJokesList";

class BuildPage extends Component {
  constructor(props) {
    super(props);
    this.state = { routines: {}, id: this.props.match.params.id };
  }

  componentDidMount() {
    // console.log("buildpage this.state.id", this.state.id);
    this.props.getOneRoutine(this.state.id);
    this.props.getRoutineJokes(this.state.id);
  }

  render() {
    const name = this.props.oneRoutine.name;
    return (
      <div>
        <h1 className="header">This routine is called {name}!</h1>
        <RoutineJokesList
          deleteRoutineJoke={this.props.deleteRoutineJoke}
          oneRoutine={this.props.oneRoutine}
          routineJokes={this.props.routineJokes}
          getRoutineJokes={this.props.getRoutineJokes}
        />
        <BuildJokesList
          addJokeToRoutine={this.props.addJokeToRoutine}
          deleteJoke={this.props.deleteJoke}
          editJoke={this.props.editJoke}
          jokes={this.props.jokes}
          oneRoutine={this.props.oneRoutine}
          user={this.props.user}
        />
        <JokesForm addJoke={this.props.addJoke} user={this.props.user} />
      </div>
    );
  }
}

export default BuildPage;
