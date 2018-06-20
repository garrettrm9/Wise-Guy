import React, { Component } from "react";
// import Nav from '../Profile/Nav'
import JokesList from "./JokesList";
import JokesForm from "./JokesForm";
import Paper from "@material-ui/core/Paper";

class JokesPage extends Component {
  render() {
    const firstName = this.props.user.first_name;
    return (
      <Paper elevation={20} className="container">
        <h2>These ground-breaking jokes belong to {firstName}</h2>
        <JokesList
          deleteJoke={this.props.deleteJoke}
          editJoke={this.props.editJoke}
          jokes={this.props.jokes}
        />
        <br />
        <JokesForm addJoke={this.props.addJoke} user={this.props.user} />
      </Paper>
    );
  }
}

export default JokesPage;
