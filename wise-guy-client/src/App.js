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
    this.deleteRoutine = this.deleteRoutine.bind(this)
    this.getJokes = this.getJokes.bind(this)
    this.addJoke = this.addJoke.bind(this)
    this.deleteJoke = this.deleteJoke.bind(this)
  }

  // !!ROUTINES, ROUTINES, ROUTINES!!

  // !!Get all routines without user_id!!
  getRoutines() {
    axios({ url: "http://localhost:3000/routines" }).then(response => {
      // console.log("getRoutines:", response.data);
      this.setState({ routines: response.data });
      // console.log("state, routines:", this.state.routines);
    });
  }
  // !!Post new Routine without user-id!!
  addRoutine(newRoutine){
    // console.log("app addRoutine:", newRoutine)
    axios({
      url: "http://localhost:3000/routines",
      method: "POST",
      data: newRoutine
    }).then(response => {
      this.getRoutines()
    })
  }
  // !!Delete Routine!!
  deleteRoutine(id) {
    axios({
      url: `http://localhost:3000/routines/${id}`,
      method: "DELETE"
    }).then(response =>{
      // console.log("app deleteRoutine", response)
      this.getRoutines()
    })
  }

  // !!JOKES, JOKES, JOKES!!

  // !!Get all jokes without user_id!!
  getJokes() {
    axios({ url: "http://localhost:3000/jokes" }).then(response => {
      // console.log("getJokes:", response.data);
      this.setState({ jokes: response.data });
      // console.log("state, jokes:", this.state.jokes);
    });
  }
  // !!Post new Routine without user-id!!
  addJoke(newJoke){
    // console.log("app addJoke", newJoke)
    axios({
      url: "http://localhost:3000/jokes",
      method: "POST",
      data: newJoke
    }).then(response => {
      this.getJokes()
    })
  }
  // !!Delete Joke!!
  deleteJoke(id) {
    axios({
      url: `http://localhost:3000/jokes/${id}`,
      method: "DELETE"
    }).then(response =>{
      // console.log("app deleteJoke", response)
      this.getJokes()
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Routines!</h1>
        <RoutinesList 
          getRoutines={this.getRoutines}
          addRoutine={this.addRoutine}
          deleteRoutine={this.deleteRoutine}
          routines={this.state.routines}
        />
        <JokesList
          getJokes={this.getJokes}
          addJoke={this.addJoke}
          deleteJoke={this.deleteJoke}
          jokes={this.state.jokes}
        />  
      </div>
    );
  }
}

export default App;
