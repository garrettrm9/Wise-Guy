import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import Paper from "@material-ui/core/Paper";
import EditJokeForm from "./EditJokeForm";

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.deleteHandler = this.deleteHandler.bind(this);
    // this.editFormHandler = this.editFormHandler.bind(this);
  }

  deleteHandler(e) {
    e.preventDefault();
    this.props.deleteJoke(this.props.joke.id);
  }

  // editFormHandler(e) {
  //   e.preventDefault();
  //   this.setState(prevState => {
  //     prevState.isEditing = !prevState.isEditing;
  //     return prevState;
  //   });
  // }

  render() {
    const joke = this.props.joke;
    const name = joke.name;
    const joke_text = joke.joke_text;
    const estimated_length = joke.estimated_length;
    return (
      <Paper elevation={20} className="tile">
        <li>
          <span>Name:</span> {name}
        </li>
        <li>
          <span>Joke text:</span> {joke_text}
        </li>
        <li>
          <span>Estimated length:</span> {estimated_length}
        </li>
        <br />
        <Button
          id="button"
          compact={true}
          color="black"
          onClick={this.deleteHandler}
        >
          Delete this joke
        </Button>
        <EditJokeForm joke={joke} editJoke={this.props.editJoke} />
      </Paper>
    );
  }
}

export default Jokes;
