import React, { Component } from "react";
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./App.css";
import axios from "axios";
import RoutinesList from "./Components/Routines/RoutinesList";
import JokesList from "./Components/Jokes/JokesList"
import Landing from "./Components/Landing/Landing"
import TokenService from './services/TokenService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { routines: [], jokes: [], isLoggedIn: false, user: {}};
    this.getRoutines = this.getRoutines.bind(this);
    this.addRoutine = this.addRoutine.bind(this)
    this.deleteRoutine = this.deleteRoutine.bind(this)
    this.editRoutine = this.editRoutine.bind(this)
    this.getJokes = this.getJokes.bind(this)
    this.addJoke = this.addJoke.bind(this)
    this.deleteJoke = this.deleteJoke.bind(this)
    this.editJoke = this.editJoke.bind(this)
    this.register = this.register.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.checkLogin = this.checkLogin.bind(this)
  }

  // !!ROUTINES, ROUTINES, ROUTINES!!

  // !!Get all routines without user_id!!
  getRoutines() {
    axios({ 
      url: "http://localhost:3000/routines",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`,
      } 
    }).then(response => {
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
      headers: {
        Authorization: `Bearer ${TokenService.read()}`,
      },       
      data: newRoutine
    }).then(response => {
      this.getRoutines()
    })
  }
  // !!Delete Routine!!
  deleteRoutine(id) {
    axios({
      url: `http://localhost:3000/routines/${id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`,
      }       
    }).then(response =>{
      // console.log("app deleteRoutine", response)
      this.getRoutines()
    })
  }
  // !!Edit Routine!!
  editRoutine(routine, routineId) {
    // console.log("app editRoutine", routine)
    // console.log("editRoutine routineId", routineId)
    axios({
      url: `http://localhost:3000/routines/${routineId}`,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`,
      },       
      data: routine
    }).then(response => {
      // console.log("post-edit routine state", response.data)
      this.getRoutines()
    })
  }

  // !!JOKES, JOKES, JOKES!!

  // !!Get all jokes without user_id!!
  getJokes() {
    axios({ 
      url: "http://localhost:3000/jokes",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`,
      }        
    }).then(response => {
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
      headers: {
        Authorization: `Bearer ${TokenService.read()}`,
      },       
      data: newJoke
    }).then(response => {
      this.getJokes()
    })
  }
  // !!Delete Joke!!
  deleteJoke(id) {
    axios({
      url: `http://localhost:3000/jokes/${id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`,
      }       
    }).then(response =>{
      // console.log("app deleteJoke", response)
      this.getJokes()
    })
  }
  // !!Edit Joke!!
  editJoke(joke, jokeId) {
    // console.log("app editJoke", joke)
    // console.log("editJoke jokeId", jokeId)
    axios({
      url: `http://localhost:3000/jokes/${jokeId}`,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`,
      },       
      data: joke
    }).then(response => {
      // console.log("post-edit joke state", response.data)
      this.getJokes()
    })
  }
  // !!!AUTH AUTH AUTH!!!

 register(data) {
    console.log("app register", data)
    axios('http://localhost:3000/users/', {
      method: "POST",
      data
    }).then(resp => {
      TokenService.save(resp.data.token)
      console.log("register", resp)
      // this.setState({user: resp})
    })
    .catch(err => console.log(`err: ${err}`));
  }

  // same as above except route is login
  // as above, we are saving the token locally using
  // the TokenService
  login(data) {
    axios('http://localhost:3000/users/login', {
      method: "POST",
      data
    }).then(resp => {
      TokenService.save(resp.data.token);
      console.log("login", resp)
      // this.setState({user: resp})
    })
    .catch(err => console.log(`err: ${err}`));
  }


  // just delete the token
  logout(ev) {
    ev.preventDefault();
    TokenService.destroy();
    console.log("app logout: totally signed out")
  }

  checkLogin() {
    axios('http://localhost:3000/isLoggedIn', {
      headers: {
        Authorization: `Bearer ${TokenService.read()}`,
      },
    }).then(resp => console.log(resp))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Landing
          register={this.register}
          login={this.login}
          logout={this.logout}
          checkLogin={this.checkLogin}
        />
        <br />        
        <h1>Routines!</h1>
        <RoutinesList 
          getRoutines={this.getRoutines}
          addRoutine={this.addRoutine}
          deleteRoutine={this.deleteRoutine}
          editRoutine={this.editRoutine}
          routines={this.state.routines}
        />
        <br />        
        <JokesList
          getJokes={this.getJokes}
          addJoke={this.addJoke}
          deleteJoke={this.deleteJoke}
          editJoke={this.editJoke}
          jokes={this.state.jokes}
        />
        <br />          
      </div>
    );
  }
}

export default App;
