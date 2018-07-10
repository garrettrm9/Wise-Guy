import React, { Component } from "react";
import Nav from "../Profile/Nav";
import BuildJokesList from "./BuildJokesList";
import BuildJokesAddForm from "./BuildJokesAddForm";
import RoutineJokesList from "./RoutineJokesList";
import Paper from "@material-ui/core/Paper";
import { Divider } from "semantic-ui-react";

class BuildPage extends Component {
  constructor(props) {
    super(props);
    this.state = { routines: {}, id: this.props.match.params.id };
  }

  componentWillMount() {
    // console.log("buildpage this.state.id", this.state.id);
    this.props.getOneRoutine(this.state.id);
    this.props.getRoutineJokes(this.state.id);
  }

  render() {
    const name = this.props.oneRoutine.name;
    return (
      <Paper elevation={20} className="container">
        <div className="nav_bar_container">
          <Nav user={this.props.user} logout={this.props.logout} />
        </div>
        <h1 className="build_greeting">This routine is called '{name}'!</h1>
        <Divider hidden />
        <BuildJokesList
          addJokeToRoutine={this.props.addJokeToRoutine}
          deleteJoke={this.props.deleteJoke}
          editJoke={this.props.editJoke}
          jokes={this.props.jokes}
          oneRoutine={this.props.oneRoutine}
          user={this.props.user}
        />
        <BuildJokesAddForm
          addJokeToRoutine={this.props.addJokeToRoutine}
          postJokeToRoutine={this.props.postJokeToRoutine}
          user={this.props.user}
          oneRoutine={this.props.oneRoutine}
        />
        <Divider hidden />
        <RoutineJokesList
          deleteRoutineJoke={this.props.deleteRoutineJoke}
          oneRoutine={this.props.oneRoutine}
          routineJokes={this.props.routineJokes}
          getRoutineJokes={this.props.getRoutineJokes}
        />
      </Paper>
    );
  }
}

export default BuildPage;
