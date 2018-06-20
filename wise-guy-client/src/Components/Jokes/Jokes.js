import React, { Component } from "react";
import { Button } from "semantic-ui-react";
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
      <ul>
        <li>Name: {name}</li>
        <li>Joke text: {joke_text}</li>
        <li>Estimated length: {estimated_length}</li>
        <br />
        <Button color="black" onClick={this.deleteHandler}>
          Delete this joke
        </Button>
        <EditJokeForm joke={joke} editJoke={this.props.editJoke} />
      </ul>
    );
  }
}

export default Jokes;
