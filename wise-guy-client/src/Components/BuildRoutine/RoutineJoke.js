import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class RoutineJoke extends Component {
  constructor(props) {
    super(props);
    this.deleteHandler = this.deleteHandler.bind(this);
    // this.changeHandler = this.changeHandler.bind(this);
    // this.editFormHandler = this.editFormHandler.bind(this);
    // this.sendEditedJoke = this.sendEditedJoke.bind(this);
  }

  deleteHandler(e) {
    e.preventDefault();
    this.props.deleteRoutineJoke(this.props.oneRoutine.id, this.props.joke.id);
    console.log(
      "RoutineJoke deleteHandler",
      this.props.oneRoutine.id,
      this.props.joke.id
    );
  }

  // changeHandler(e) {
  //   e.preventDefault();
  //   const key = e.target.name;
  //   const value = e.target.value;
  //   this.setState(prevState => {
  //     prevState.jokes[key] = value;
  //     return prevState;
  //   });
  //   // console.log("routine editHandler", this.state)
  // }
  // editFormHandler(e) {
  //   e.preventDefault();
  //   this.setState(prevState => {
  //     prevState.isEditing = !prevState.isEditing;
  //     return prevState;
  //   });
  // }

  // sendEditedJoke(e) {
  //   e.preventDefault();
  //   // console.log("joke sendEditedJoke", this.state.jokes)
  //   this.props.editJoke(this.state, this.props.joke.id);
  //   this.setState({ isEditing: false });
  // }

  render() {
    const joke = this.props.joke;
    const id = joke.id;
    const name = joke.name;
    const joke_text = joke.joke_text;
    const estimated_length = joke.estimated_length;
    return (
      <ul key={id.toString()}>
        <li>Name: {name}</li>
        <li>Joke text: {joke_text}</li>
        <li>Estimated length: {estimated_length}</li>
        <br />
        <Button color="orange" onClick={this.deleteHandler}>
          Remove this joke from the routine
        </Button>
      </ul>
    );
  }
}

export default RoutineJoke;
