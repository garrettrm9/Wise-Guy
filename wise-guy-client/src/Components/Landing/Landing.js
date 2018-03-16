import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

class Landing extends Component {
  render() {
    return (
      <div className="landing_container">
        <h1>Way to stick the LANDING</h1>
        <br />
        <Link to={"/register"}>
          <button>Register</button>
        </Link>
        <br />
        <SignUp login={this.props.login} />
      </div>
    );
  }
}

export default Landing;
