import React, { Component } from "react";

class Jokes extends Component {
  render() {
    const joke = this.props.joke;
    const id = joke.id;
    const user_id = joke.user_id;
    const name = joke.name;
    const joke_text = joke.joke_text;
    return (
      <ul key={id.toString()}>
        <li>Id: {id}</li>
        <li>User Id: {user_id}</li>
        <li>Name: {name}</li>
        <li>Joke text: {joke_text}</li>
      </ul>
    );
  }
}

export default Jokes;
