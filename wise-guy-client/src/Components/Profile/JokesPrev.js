import React, { Component } from "react";
import { Link } from "react-router-dom";

class JokesPrev extends Component {
  render() {
    return (
      <div>
        <Link to="/jokes">
          <button>Go to jokes!</button>
        </Link>
      </div>
    );
  }
}

export default JokesPrev;
