import React, { Component } from "react";

class Jokes extends Component {

  constructor(props){
    super(props)
    this.state = {isEditing: false, jokes: {}}
    this.deleteHandler = this.deleteHandler.bind(this)
    this.editFormHandler = this.editFormHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.sendEditedJoke = this.sendEditedJoke.bind(this)
  }

  deleteHandler(e){
    e.preventDefault()
    this.props.deleteJoke(this.props.joke.id)
  }

  editFormHandler(e){
    e.preventDefault()
    this.setState(prevState => {
      prevState.isEditing = !prevState.isEditing
      return prevState
    })
  }

  sendEditedJoke(e){
    e.preventDefault()
    // console.log("joke sendEditedJoke", this.state.jokes)
    this.props.editJoke(this.state, this.props.joke.id)
    this.setState({isEditing: false})
  }

  changeHandler(e){
    e.preventDefault()
    const key = e.target.name
    const value = e.target.value
    this.setState(prevState => {
      prevState.jokes[key] = value
      return prevState
    })
    // console.log("routine editHandler", this.state)
  }


  render() {
    const joke = this.props.joke;
    const id = joke.id;
    const user_id = joke.user_id;
    const name = joke.name;
    const joke_text = joke.joke_text;
    if (this.state.isEditing) {
      return (
        <div className="joke_form">
          <form onSubmit={this.sendEditedJoke}>
            <label>Edit this joke</label>
            <input onChange={this.changeHandler} type='text' placeholder='User_id' name='user_id' value={this.state.jokes.user_id}/>
            <input onChange={this.changeHandler} type='text' placeholder='Joke name' name='name' value={this.state.jokes.name}/>
            <input onChange={this.changeHandler} type='text' placeholder='Joke text' name='joke_text' value={this.state.jokes.joke_text}/>
            <button onClick={this.editFormHandler}>Never mind, screw that edit</button>
            <button>Submit edited joke</button>    
          </form>
        </div>
      )
    }
    return (
      <ul key={id.toString()}>
        <li>User Id: {user_id}</li>
        <li>Joke id: {id}</li>
        <li>Name: {name}</li>
        <li>Joke text: {joke_text}</li>
        <button onClick={this.deleteHandler}>Delete joke</button>
        <button onClick={this.editFormHandler}>Edit joke</button>
      </ul>
    );
  }
}

export default Jokes;
