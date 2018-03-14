import React, { Component } from "react";
// import {Link} from 'react-router-dom'
import Register from "./Register";
import SignUp from "./SignUp";

class Landing extends Component {
  render() {
    return (
      <div className="landing_container">
        <h1>Way to stick the LANDING</h1>
        <button onClick={this.props.logout}>Sign out</button>
        <br/>       
        <Register register={this.props.register} />
        <br/>       
        <SignUp login={this.props.login} />
      </div>
    );
  }
}

export default Landing;

// <Link to="/register"><button>Register</button></Link>
// <br />
// <Link to="/login"><button>Login</button></Link>

