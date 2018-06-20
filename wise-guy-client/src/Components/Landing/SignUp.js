import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.loginUser = this.loginUser.bind(this);
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

  loginUser(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.loginUser}>
          <label>Login</label>
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
          <Button color="green" icon labelPosition="left">
            <Icon name="left arrow" />
            Login yo'self
          </Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
