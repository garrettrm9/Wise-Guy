import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { Button, Form, Label, Icon } from "semantic-ui-react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  changeHandler(e) {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      prevState[key] = value;
      return prevState;
    });
    // console.log("landing changeHandler", this.state)
  }

  registerUser(e) {
    e.preventDefault();
    this.props.register(this.state);
  }

  render() {
    return (
      <Paper elevation={20} className="container">
        <Form onSubmit={this.registerUser}>
          <h2>Join the movement (please?)</h2>
          <Label size="huge">
            <Icon name="down arrow" />Register
          </Label>
          <br />
          <br />
          <Form.Field>
            <input
              onChange={this.changeHandler}
              type="text"
              placeholder="First name"
              name="first_name"
              value={this.state.first_name}
            />
            <input
              onChange={this.changeHandler}
              type="text"
              placeholder="Last name"
              name="last_name"
              value={this.state.last_name}
            />
            <input
              onChange={this.changeHandler}
              type="text"
              placeholder="Email"
              name="email"
              value={this.state.email}
            />
            <input
              onChange={this.changeHandler}
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
            />
          </Form.Field>
          <br />
          <Button color="green">Submit registration</Button>
        </Form>
      </Paper>
    );
  }
}

export default Register;
