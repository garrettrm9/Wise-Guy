import React, { Component } from "react";
import Jokes from "./Jokes";

class JokesList extends Component {
  constructor(props) {
    super(props);
    this.renderJokes = this.renderJokes.bind(this);
  }

  renderJokes(joke, index) {
    // console.log("renderJokes:",index)
    return (
      <Jokes joke={joke}
      index={index}
      />
    )
  }

  componentDidMount() {
    this.props.getJokes();
  }

  render() {
    const jokes = this.props.jokes.map(this.renderJokes);
    return (
      <div>
        <h2>Hello from JokesList!!!</h2>
        <div className="jokes_list">{jokes}</div>
      </div>
    );
  }
}

export default JokesList;
