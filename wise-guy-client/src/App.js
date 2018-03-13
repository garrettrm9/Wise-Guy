import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import RoutinesList from "./Components/Routines/RoutinesList";
import JokesList from "./Components/Jokes/JokesList"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { routines: [], jokes: []};
    this.getRoutines = this.getRoutines.bind(this);
    this.addRoutine = this.addRoutine.bind(this)
    this.getJokes = this.getJokes.bind(this)
  }

// Routines, Routines, ROUTINES!!
// Get all routines without user_id
  getRoutines() {
    axios({ url: "http://localhost:3000/routines" }).then(response => {
      // console.log("getRoutines:", response.data);
      this.setState({ routines: response.data });
      // console.log("state, routines:", this.state.routines);
    });
  }
//Post new Routine without user-id
  addRoutine(newRoutine){
    axios({
      url: "http://localhost:3000/routines",
      method: "POST",
      data: newRoutine
    }).then(response =>{
      this.getRoutines()
    })
  }

// Jokes, Jokes, JOKES!!
// Get all jokes without user_id
  getJokes() {
    axios({ url: "http://localhost:3000/jokes" }).then(response => {
      // console.log("getJokes:", response.data);
      this.setState({ jokes: response.data });
      // console.log("state, jokes:", this.state.jokes);
    });
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        <h1>Routines!</h1>
        <RoutinesList 
          getRoutines={this.getRoutines}
          addRoutine={this.addRoutine}
          routines={this.state.routines}
        />
        <JokesList
          getJokes={this.getJokes}
          jokes={this.state.jokes}
        />  
      </div>
    );
  }
}

export default App;
