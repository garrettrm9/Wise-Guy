import React, { Component } from "react";
import Jokes from "./Jokes";

class JokesList extends Component {
  constructor(props) {
    super(props);
    this.state = {jokes:{}}
    this.renderJokes = this.renderJokes.bind(this);
    this.submitJoke = this.submitJoke.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  renderJokes(joke, index) {
    // console.log("renderJokes:",index)
    return (
      <Jokes joke={joke}
      index={index}
      />
    )
  }

  changeHandler(e){
    // console.log("Joke changeHandler", this.state)
    e.preventDefault()
    const key = e.target.name
    const value = e.target.value
    this.setState(prevState => {
      prevState.jokes[key] = value
      return prevState
    })
  }

  submitJoke(e){
    // console.log("Joke submitJoke", this.state)
    e.preventDefault()
    this.props.addJoke(this.state)
  }

  componentDidMount() {
    this.props.getJokes();
  }

  render() {
    const jokes = this.props.jokes.map(this.renderJokes);
    return (
      <div className="jokes_container">
        <h2>Hello from JokesList!!!</h2>
        <div className="jokes_list">{jokes}</div>
        <div className="jokes_form">
          <form onSubmit={this.submitJoke}>
            <label>Add a joke! </label>
            <input onChange={this.changeHandler} type='text' placeholder='User_id' name='user_id' value={this.state.jokes.user_id}/>          
            <input onChange={this.changeHandler} type='text' placeholder='Joke name' name='name' value={this.state.jokes.name}/>          
            <input onChange={this.changeHandler} type='text' placeholder='Joke text' name='joke_text' value={this.state.jokes.joke_text}/>          
            <button>Submit new joke</button>
          </form>
        </div>
      </div>
    );
  }
}

export default JokesList;
