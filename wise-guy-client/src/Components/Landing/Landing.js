import React, { Component } from "react";
import SignUp from "./SignUp";
import Paper from "@material-ui/core/Paper";
import { Divider, Label, Icon } from "semantic-ui-react";

class Landing extends Component {
  render() {
    return (
      <Paper elevation={20} className="container">
        <h1>Wise Guy</h1>
        <Divider hidden />
        <h2>The smart way to be a funny person</h2>
        <Divider hidden />
        <SignUp login={this.props.login} />
        <Divider hidden />
        <Label as="a" href={"/register"} color="black" size="big">
          <Icon name="user" color="teal" />New? Sign up here!
        </Label>
      </Paper>
    );
  }
}

export default Landing;
