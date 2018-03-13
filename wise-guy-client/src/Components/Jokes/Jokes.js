import React, { Component } from "react";

class Jokes extends Component {

  constructor(props){
    super(props)
    this.deleteHandler = this.deleteHandler.bind(this)
  }

  deleteHandler(e){
    e.preventDefault()
    this.props.deleteJoke(this.props.joke.id)
  }

  render() {
    const joke = this.props.joke;
    const id = joke.id;
    const user_id = joke.user_id;
    const name = joke.name;
    const joke_text = joke.joke_text;
    return (
      <ul key={id.toString()}>
        <li>User Id: {user_id}</li>
        <li>Joke id: {id}</li>
        <li>Name: {name}</li>
        <li>Joke text: {joke_text}</li>
        <button onClick={this.deleteHandler}>Delete joke</button>
      </ul>
    );
  }
}

export default Jokes;
