// use content block card

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { Button, Icon } from "semantic-ui-react";

class RoutinesPrev extends Component {
  render() {
    return (
      <Paper elevation={20} className="preview">
        <h2>All your routines</h2>
        <p>
          Click here to see a list of all your routines, to delete a routine, to
          update it, or to add something new!
        </p>
        <Link to="/routines">
          <Button color="red" icon labelPosition="left">
            <Icon name="right arrow" />
            See all your routines!
          </Button>
        </Link>
      </Paper>
    );
  }
}

export default RoutinesPrev;
