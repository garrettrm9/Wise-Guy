import React, { Component } from "react";
import { Button, Divider } from "semantic-ui-react";
import BuildJokesEditForm from "./BuildJokesEditForm";

class BuildJokes extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, jokes: {} };
    this.deleteHandler = this.deleteHandler.bind(this);
    // this.editFormHandler = this.editFormHandler.bind(this);
    this.addJokeHandler = this.addJokeHandler.bind(this);
  }

  addJokeHandler(e) {
    e.preventDefault();
    this.props.addJokeToRoutine(this.props.oneRoutine.id, this.props.joke.id);
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
      <ul>
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
          color="red"
          onClick={this.deleteHandler}
        >
          Delete this joke
        </Button>
        <BuildJokesEditForm joke={joke} editJoke={this.props.editJoke} />
        <Button
          id="button"
          compact={true}
          color="yellow"
          onClick={this.addJokeHandler}
        >
          Add to the routine
        </Button>
        <Divider />
      </ul>
    );
  }
}

export default BuildJokes;
