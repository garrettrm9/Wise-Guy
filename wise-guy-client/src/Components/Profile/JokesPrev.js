//use content block card

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { Button, Icon } from "semantic-ui-react";

class JokesPrev extends Component {
  render() {
    return (
      <Paper elevation={20} className="preview">
        <h2>All your jokes</h2>
        <p>
          Click here to see a list of all your jokes, to delete a joke, to edit
          it, or to add something new!
        </p>
        <Link to="/jokes">
          <Button primary icon labelPosition="left">
            <Icon name="right arrow" />
            See all your jokes!
          </Button>
        </Link>
      </Paper>
    );
  }
}

export default JokesPrev;
