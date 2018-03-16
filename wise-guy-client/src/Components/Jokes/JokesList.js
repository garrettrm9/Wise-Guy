import React, { Component } from "react";
import Jokes from "./Jokes";

class JokesList extends Component {
  constructor(props) {
    super(props);
    this.renderJokes = this.renderJokes.bind(this);
    // this.giveUserIdToJokesState = this.giveUserIdToJokesState.bind(this)
  }

  renderJokes(joke, index) {
    // console.log("renderJokes:",index)
    return (
      <Jokes
        joke={joke}
        index={index}
        deleteJoke={this.props.deleteJoke}
        editJoke={this.props.editJoke}
      />
    );
  }
  // giveUserIdToJokesState(){
  //   // this.setState({jokes: {user_id: this.props.user.id}})
  //   console.log("giveUserIdToJokesState", this.state)
  // }

  render() {
    const jokes = this.props.jokes.map(this.renderJokes);
    return (
      <div className="jokes_container">
        <h2>Hello from JokesList!!!</h2>
        <div className="jokes_list">{jokes}</div>
      </div>
    );
  }
}

export default JokesList;
