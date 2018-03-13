import React, { Component } from "react";

class Jokes extends Component {
  render() {
    const joke = this.props.joke;
    const id = joke.id;
    const user_id = joke.user_id;
    const name = joke.name;
    const joke_text = joke.joke_text;
    return (
      <div>
        <h3>Greetings from Jokes!!!</h3>
        <p>Id: {id}</p>
        <p>User Id: {user_id}</p>
        <p>Name: {name}</p>
        <p>Joke text: {joke_text}</p>
      </div>
    );
  }
}

export default Jokes;
