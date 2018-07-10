import React, { Component } from "react";
import Nav from "./Nav";

import JokesPrev from "./JokesPrev";
import RoutinesPrev from "./RoutinesPrev";
import Paper from "@material-ui/core/Paper";

class ProfilePage extends Component {
  render() {
    const user = this.props.user;
    const firstName = user.first_name;
    const lastName = user.last_name;
    return (
      <Paper elevation={20} className="container">
        <div className="nav_bar_container">
          <Nav user={this.props.user} logout={this.props.logout} />
        </div>
        <h1 className="profile_greeting">
          Welcome to your profile page, {firstName} {lastName} !
        </h1>
        <JokesPrev />
        <RoutinesPrev />
      </Paper>
    );
  }
}

export default ProfilePage;
