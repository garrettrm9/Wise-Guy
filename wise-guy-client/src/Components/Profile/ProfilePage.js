import React, { Component } from "react";
import JokesPrev from "./JokesPrev";
import RoutinesPrev from "./RoutinesPrev";

class ProfilePage extends Component {
  render() {
    const user = this.props.user;
    const firstName = user.first_name;
    const lastName = user.last_name;
    // const oneLinerJoke = require("one-liner-joke");
    // const getRandomJoke = oneLinerJoke.getRandomJoke();
    return (
      <div>
        <h1 className="header">
          Welcome to your profile page, {firstName} {lastName} !
        </h1>
        <JokesPrev />
        <RoutinesPrev />
      </div>
    );
  }
}

export default ProfilePage;
