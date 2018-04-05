import React, { Component } from "react";

class BuildJokes extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, jokes: {} };
    this.deleteHandler = this.deleteHandler.bind(this);
    this.editFormHandler = this.editFormHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.sendEditedJoke = this.sendEditedJoke.bind(this);
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

  editFormHandler(e) {
    e.preventDefault();
    this.setState(prevState => {
      prevState.isEditing = !prevState.isEditing;
      return prevState;
    });
  }

  sendEditedJoke(e) {
    e.preventDefault();
    // console.log("joke sendEditedJoke", this.state.jokes)
    this.props.editJoke(this.state, this.props.joke.id);
    this.setState({ isEditing: false });
  }

  changeHandler(e) {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      prevState.jokes[key] = value;
      return prevState;
    });
    // console.log("routine editHandler", this.state)
  }

  render() {
    const joke = this.props.joke;
    const name = joke.name;
    const joke_text = joke.joke_text;
    const estimated_length = joke.estimated_length;
    let maybeFormOpen = null;
    if (this.state.isEditing) {
      maybeFormOpen = (
        <div className="joke_form">
          <form onSubmit={this.sendEditedJoke}>
            <label>Edit this joke</label>
            <input
              onChange={this.changeHandler}
              type="text"
              placeholder={name}
              name="name"
              value={this.state.jokes.name}
            />
            <input
              onChange={this.changeHandler}
              type="text"
              placeholder={joke_text}
              name="joke_text"
              value={this.state.jokes.joke_text}
            />
            <input
              onChange={this.changeHandler}
              type="text"
              placeholder={estimated_length}
              name="estimated_length"
              value={this.state.jokes.estimated_length}
            />
            <button onClick={this.editFormHandler}>
              Never mind, screw that edit
            </button>
            <button>Submit edited joke</button>
          </form>
        </div>
      );
    }
    return (
      <ul>
        <li>Name: {name}</li>
        <li>Joke text: {joke_text}</li>
        <li>Estimated length: {estimated_length}</li>
        <button onClick={this.deleteHandler}>Delete joke</button>
        <button onClick={this.editFormHandler}>Edit joke</button>
        <button onClick={this.addJokeHandler}>Add to the routine</button>
        {maybeFormOpen}
      </ul>
    );
  }
}

export default BuildJokes;
