import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import Paper from "@material-ui/core/Paper";

class Landing extends Component {
  render() {
    return (
      <Paper elevation={20} className="container">
        <h1>Wise Guy</h1>
        <h2>The smart way to be a funny person</h2>
        <Link to={"/register"}>
          <p>Sign up here!</p>
        </Link>
        <SignUp login={this.props.login} />
      </Paper>
    );
  }
}

export default Landing;
