import React, { Component } from "react";
// import {Link} from 'react-router-dom'
// import Register from "./Register";
import SignUp from "./SignUp";

class Landing extends Component {
  render() {
    return (
      <div className="landing_container">
        <h1>Way to stick the LANDING</h1>
        <br/>       
        <button>Register</button>
        <br />
        <SignUp login={this.props.login} />
      </div>
    );
  }
}

export default Landing;

/*!!Needs link!!!!*/

// <Link to="/register">
// </Link>
