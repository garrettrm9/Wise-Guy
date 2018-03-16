import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <h1>Greetings from nav bar!!</h1>
        <Router>
          <Link to={"/profile"}>
            <button>Return to profile page</button>
          </Link>
        </Router>
        <button onClick={this.props.logout}>Sign out</button>
      </div>
    );
  }
}

export default Nav;
