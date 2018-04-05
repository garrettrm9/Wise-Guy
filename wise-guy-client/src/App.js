import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.css";
import axios from "axios";
import ProfilePage from "./Components/Profile/ProfilePage";
import RoutinesPage from "./Components/Routines/RoutinesPage";
import JokesPage from "./Components/Jokes/JokesPage";
import BuildPage from "./Components/BuildRoutine/BuildPage";
import Landing from "./Components/Landing/Landing";
import TokenService from "./services/TokenService";
import Register from "./Components/Landing/Register";
import Nav from "./Components/Profile/Nav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oneRoutine: [],
      routines: [],
      jokes: [],
      routineJokes: [],
      user: {},
      isLoggedIn: false
    };
    this.getOneRoutine = this.getOneRoutine.bind(this);
    this.getRoutines = this.getRoutines.bind(this);
    this.addRoutine = this.addRoutine.bind(this);
    this.deleteRoutine = this.deleteRoutine.bind(this);
    this.editRoutine = this.editRoutine.bind(this);
    this.getJokes = this.getJokes.bind(this);
    this.addJoke = this.addJoke.bind(this);
    this.deleteJoke = this.deleteJoke.bind(this);
    this.editJoke = this.editJoke.bind(this);
    this.getRoutineJokes = this.getRoutineJokes.bind(this);
    this.addJokeToRoutine = this.addJokeToRoutine.bind(this);
    this.deleteRoutineJoke = this.deleteRoutineJoke.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  // !!ROUTINES, ROUTINES, ROUTINES!!

  // !!Get all routines with user_id!!

  //              !!heroku db example!!!
  // getRoutines(id) {
  //   axios({
  //     url: `https://wise-guy.herokuapp.com/users/${id}/routines`,

  //!!Render all Routines based on user_id in argument!!
  getRoutines(userId) {
    axios({
      url: `http://wise-guy.herokuapp.com/users/${userId}/routines`,
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(response => {
        // console.log("getRoutines:", response.data);
        this.setState({ routines: response.data });
        // console.log("state, routines:", this.state.routines);
      })
      .catch(err => console.log(`err: ${err}`));
  }
  //!!Render JUST ONE SINGLE Routine based on routine_id in argument!!
  getOneRoutine(routineId) {
    axios({
      url: `http://wise-guy.herokuapp.com/routines_with_jokes/${routineId}/build`,
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(response => {
        // console.log("getOneRoutine:", response.data);
        this.setState({ oneRoutine: response.data });
        // console.log("state, oneRoutine:", this.state.oneRoutine);
      })
      .catch(err => console.log(`err: ${err}`));
  }
  // !!Post new Routine with user_id from state and newRoutine data as argument!!
  addRoutine(newRoutine) {
    // console.log("app addRoutine:", newRoutine)
    axios({
      url: `http://wise-guy.herokuapp.com/users/${this.state.user.id}/routines`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      },
      data: newRoutine
    })
      .then(response => {
        this.getRoutines(this.state.user.id);
      })
      .catch(err => console.log(`err: ${err}`));
  }

  // !!Delete Routine based on routine_id as argument, getting user_id from state!!
  deleteRoutine(routineId) {
    axios({
      url: `http://wise-guy.herokuapp.com/users/${
        this.state.user.id
      }/routines/${routineId}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(response => {
        // console.log("app deleteRoutine", response)
        this.getRoutines(this.state.user.id);
      })
      .catch(err => console.log(`err: ${err}`));
  }
  // !!Edit Routine based on routine_id in argument, edited body from routine argument,
  // and user_id from state!!
  editRoutine(routine, routineId) {
    // console.log("app editRoutine", routine)
    // console.log("editRoutine routineId", routineId)
    axios({
      url: `http://wise-guy.herokuapp.com/users/${
        this.state.user.id
      }/routines/${routineId}`,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      },
      data: routine
    })
      .then(response => {
        // console.log("post-edit routine state", response.data)
        this.getRoutines(this.state.user.id);
      })
      .catch(err => console.log(`err: ${err}`));
  }

  // !!JOKES, JOKES, JOKES!!

  // !!Get all jokes with user_id as an argument!!
  getJokes(userId) {
    axios({
      url: `http://wise-guy.herokuapp.com/users/${userId}/jokes/`,
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(response => {
        // console.log("getJokes:", response.data);
        this.setState({ jokes: response.data });
        // console.log("state, jokes:", this.state.jokes);
      })
      .catch(err => console.log(`err: ${err}`));
  }
  // !!Post new Routine with user-id from state, new joke data from newJoke argument!!
  addJoke(newJoke) {
    // console.log("app addJoke", newJoke)
    // console.log("app addJoke", this.state.user.id)
    axios({
      url: `http://wise-guy.herokuapp.com/users/${this.state.user.id}/jokes`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      },
      data: newJoke
    })
      .then(response => {
        this.getJokes(this.state.user.id);
      })
      .catch(err => console.log(`err: ${err}`));
  }
  // !!Delete Joke based on joke_id from argument, user_id from state!!
  deleteJoke(jokeId) {
    axios({
      url: `http://wise-guy.herokuapp.com/users/${
        this.state.user.id
      }/jokes/${jokeId}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(response => {
        // console.log("app deleteJoke", response)
        this.getJokes(this.state.user.id);
      })
      .catch(err => console.log(`err: ${err}`));
  }
  // !!Edit Joke based on joke form data and jokeId arguments, user_id from state!!
  editJoke(joke, jokeId) {
    // console.log("app editJoke", joke)
    // console.log("editJoke jokeId", jokeId)
    axios({
      url: `http://wise-guy.herokuapp.com/users/${
        this.state.user.id
      }/jokes/${jokeId}`,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      },
      data: joke
    })
      .then(response => {
        // console.log("post-edit joke state", response.data)
        this.getJokes(this.state.user.id);
      })
      .catch(err => console.log(`err: ${err}`));
  }

  // !!ROUTINES w/JOKES, ROUTINES w/JOKES, ROUTINES w/JOKES!!

  // !!Renders all jokes linked to a specific routine via routine_id as argument
  // (found on BuildPage component)!!
  getRoutineJokes(routine_id) {
    console.log("getRoutineJokes routine_id argument", routine_id);
    axios({
      url: `http://wise-guy.herokuapp.com/routines_with_jokes/${routine_id}`,
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(response => {
        this.setState({ routineJokes: response.data });
        console.log("getRoutineJokes", this.state.routineJokes);
      })
      .catch(err => console.log(`err: ${err}`));
  }
  // !!Adds a joke to the current routine linked to a specific routine via routine_id
  // and joke_id as arguments ((found on BuildRoutine component)!!
  addJokeToRoutine(routine_id, joke_id) {
    axios({
      url: `http://wise-guy.herokuapp.com/routines_with_jokes/${routine_id}/jokes/${joke_id}`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(response => {
        // console.log("addJokeToRoutine", response.data)
        this.getRoutineJokes(this.state.oneRoutine.id);
      })
      .catch(err => console.log(`err: ${err}`));
  }
  // !!Deletes a specific joke from the current routine  via routine_id
  // and joke_id as arguments ((found on BuildRoutine component)!!
  deleteRoutineJoke(routine_id, joke_id) {
    axios({
      url: `http://wise-guy.herokuapp.com/routines_with_jokes/${routine_id}/jokes/${joke_id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(response => {
        // console.log("deleteRoutineJoke", response.data);
        this.getRoutineJokes(this.state.oneRoutine.id);
      })
      .catch(err => console.log(`err: ${err}`));
  }

  // !!!AUTH AUTH AUTH!!!

  register(data) {
    // console.log("app register", data)
    axios("http://wise-guy.herokuapp.com/users/", {
      method: "POST",
      data
    })
      .then(resp => {
        TokenService.save(resp.data.token);
        // console.log("register", resp.data)
        this.setState({
          user: resp.data.user,
          isLoggedIn: true
        });
        // console.log("register", this.state.user)
        this.getRoutines(this.state.user.id);
        this.getJokes(this.state.user.id);
      })
      .catch(err => console.log(`err: ${err}`));
  }

  login(data) {
    // console.log("app login", data)
    axios("http://wise-guy.herokuapp.com/users/login", {
      method: "POST",
      data
    })
      .then(resp => {
        TokenService.save(resp.data.token);
        // console.log("login", resp.data.user)
        this.setState({
          user: resp.data.user,
          isLoggedIn: true
        });
        // console.log("login", this.state.user)
        this.getRoutines(this.state.user.id);
        this.getJokes(this.state.user.id);
      })
      .catch(err => console.log(`err: ${err}`));
  }

  logout(e) {
    e.preventDefault();
    TokenService.destroy();
    this.setState({ isLoggedIn: false });
    console.log("app logout: totally signed out");
  }

  render() {
    if (this.state.isLoggedIn === true) {
      return (
        <div className="App">
          <Nav logout={this.logout} user={this.state.user} />
          <Router>
            <Switch>
              <Route
                exact
                path="/routines/:id"
                render={props => (
                  <BuildPage
                    {...props}
                    addJoke={this.addJoke}
                    deleteJoke={this.deleteJoke}
                    editJoke={this.editJoke}
                    jokes={this.state.jokes}
                    user={this.state.user}
                    routineJokes={this.state.routineJokes}
                    oneRoutine={this.state.oneRoutine}
                    getOneRoutine={this.getOneRoutine}
                    getRoutineJokes={this.getRoutineJokes}
                    addJokeToRoutine={this.addJokeToRoutine}
                    deleteRoutineJoke={this.deleteRoutineJoke}
                  />
                )}
              />
              <Route
                exact
                path="/routines"
                render={props => (
                  <RoutinesPage
                    {...props}
                    addRoutine={this.addRoutine}
                    deleteRoutine={this.deleteRoutine}
                    editRoutine={this.editRoutine}
                    routines={this.state.routines}
                    user={this.state.user}
                  />
                )}
              />
              <Route
                exact
                path="/jokes"
                render={props => (
                  <JokesPage
                    {...props}
                    addJoke={this.addJoke}
                    deleteJoke={this.deleteJoke}
                    editJoke={this.editJoke}
                    jokes={this.state.jokes}
                    user={this.state.user}
                  />
                )}
              />
              <Route
                exact
                path="/profile"
                render={props => (
                  <ProfilePage {...props} user={this.state.user} />
                )}
              />
              <Route path="/" render={() => <Redirect to="/profile" />} />
            </Switch>
          </Router>
        </div>
      );
    } else if (this.state.isLoggedIn === false) {
      return (
        <div className="App">
          <Router>
            <Switch>
              <Route
                path="/landing"
                render={props => <Landing {...props} login={this.login} />}
              />
              <Route
                path="/register"
                render={props => (
                  <Register {...props} register={this.register} />
                )}
              />
              <Route path="/" render={() => <Redirect to="/landing" />} />
            </Switch>
          </Router>
        </div>
      );
    }
  }
}

export default App;
