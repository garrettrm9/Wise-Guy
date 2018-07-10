import React, { Component } from "react";
import Nav from "../Profile/Nav";
import JokesList from "./JokesList";
import JokesForm from "./JokesForm";
import Paper from "@material-ui/core/Paper";
import { Divider } from "semantic-ui-react";

class JokesPage extends Component {
  render() {
    const firstName = this.props.user.first_name;
    return (
      <Paper elevation={20} className="container">
        <div className="nav_bar_container">
          <Nav user={this.props.user} logout={this.props.logout} />
        </div>
        <h2>These ground-breaking jokes belong to {firstName}:</h2>
        <Divider hidden />
        <JokesForm addJoke={this.props.addJoke} user={this.props.user} />
        <Divider hidden />
        <JokesList
          deleteJoke={this.props.deleteJoke}
          editJoke={this.props.editJoke}
          jokes={this.props.jokes}
        />
      </Paper>
    );
  }
}

export default JokesPage;
