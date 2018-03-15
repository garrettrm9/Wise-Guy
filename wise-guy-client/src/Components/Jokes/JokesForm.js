import React, { Component } from "react";

class JokesForm extends Component {

  constructor(props){
    super(props)
    this.state = {jokes:{}}    
    this.submitJoke = this.submitJoke.bind(this)
    this.changeHandler = this.changeHandler.bind(this)    
  }

  //grabs changes in form below, stores in joke state, also grabs user_id from props
  //and adds to joke state, fulfilling all params for POST request
  changeHandler(e){
    // console.log("submitNewJoke", this.props.user.id)
    // console.log("Joke changeHandler", this.state)
    // this.setState({jokes: {user_id: this.props.user.id}})   
    e.preventDefault()
    const key = e.target.name
    const value = e.target.value
    this.setState(prevState => {
      prevState.jokes[key] = value
      prevState.jokes.user_id = this.props.user.id
      return prevState
    })
  }

  submitJoke(e){
    // this.setState({jokes: {user_id: this.props.user.id}})   
    // console.log("Joke submitJoke", this.state)
    e.preventDefault()
    this.props.addJoke(this.state)
  }

  render(){
    return(
      <div className="jokes_form">
        <h3>Greetings from JokesForm!!</h3>
        <form onSubmit={this.submitJoke}>
          <label>Add a joke! </label>
          <input onChange={this.changeHandler} type='text' placeholder='Joke name' name='name' value={this.state.jokes.name}/>          
          <input onChange={this.changeHandler} type='text' placeholder='Joke text' name='joke_text' value={this.state.jokes.joke_text}/>          
          <input onChange={this.changeHandler} type='text' placeholder='Joke length' name='estimated_length' value={this.state.jokes.estimated_length}/>          
          <button>Submit new joke</button>
        </form>
      </div>      
    )
  }

}

export default JokesForm