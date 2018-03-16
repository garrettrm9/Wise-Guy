import React, { Component } from "react";
import { Link } from "react-router-dom";

class RoutinesPrev extends Component {
  render() {
    return (
      <div>
        <Link to="/routines">
          <button>Go to routines!</button>
        </Link>
      </div>
    );
  }
}

export default RoutinesPrev;
