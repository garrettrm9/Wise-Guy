import React, { Component } from "react";
import BuildJokesList from "../BuildRoutine/BuildJokesList";
import JokesForm from "../Jokes/JokesForm";

class BuildPage extends Component {
  render() {
    // const routine = this.props.routine;
    // const id = routine.id;
    // const name = routine.name;
    // const estimated_length = routine.estimated_length;
    return (
      <div>
        <h2 className="">This is the routine!</h2>
        <BuildJokesList
          deleteJoke={this.props.deleteJoke}
          editJoke={this.props.editJoke}
          jokes={this.props.jokes}
        />
        <JokesForm addJoke={this.props.addJoke} user={this.props.user} />
      </div>
    );
  }
}

export default BuildPage;
