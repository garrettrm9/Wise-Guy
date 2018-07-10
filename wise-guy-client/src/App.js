import React, { Component } from "react";
import "./App.css";
// import Responsive from "react-responsive";
import axios from "axios";
import TokenService from "./services/TokenService";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProfilePage from "./Components/Profile/ProfilePage";
import RoutinesPage from "./Components/Routines/RoutinesPage";
import JokesPage from "./Components/Jokes/JokesPage";
import BuildPage from "./Components/BuildRoutine/BuildPage";
import Landing from "./Components/Landing/Landing";
import Register from "./Components/Landing/Register";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oneRoutine: [],
      oneJoke: [],
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
    this.postJokeToRoutine = this.postJokeToRoutine.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  //              !!heroku db example!!!
  // getRoutines(id) {
  //   axios({
  //     url: `https://wise-guy.herokuapp.com/users/${id}/routines`,

  // !!ROUTINES, ROUTINES, ROUTINES!!

  // !!Get all routines with user_id!!

  //!!Render all Routines based on user_id in argument!!
  getRoutines(userId) {
    axios({
      url: `https://wise-guy.herokuapp.com/users/${userId}/routines`,
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(response => {
        this.setState({ routines: response.data });
      })
      .catch(err => console.log(`getRoutines err: ${err}`));
  }
  //!!Render JUST ONE SINGLE Routine based on routine_id in argument!!
  getOneRoutine(routineId) {
    console.log("getOneRoutine");
    axios({
      url: `https://wise-guy.herokuapp.com/routines_with_jokes/${routineId}/build`,
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(response => {
        this.setState({ oneRoutine: response.data });
      })
      .catch(err => console.log(`getOneRoutine err: ${err}`));
  }
  // !!Post new Routine with user_id from state and newRoutine data as argument!!
  addRoutine(newRoutine) {
    axios({
      url: `https://wise-guy.herokuapp.com/users/${
        this.state.user.id
      }/routines`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      },
      data: newRoutine
    })
      .then(response => {
        this.getRoutines(this.state.user.id);
      })
      .catch(err => {
        console.log(`addRoutine err: ${err}`);
        const errorValues = Object.values(err);
        console.log("addRoutine errorCatch", errorValues[2].status);
        if (errorValues[2].status === 422) {
          alert(
            "Please use a real number for the estimated number of minutes!"
          );
        }
      });
  }

  // !!Delete Routine based on routine_id as argument, getting user_id from state!!
  deleteRoutine(routineId) {
    axios({
      url: `https://wise-guy.herokuapp.com/users/${
        this.state.user.id
      }/routines/${routineId}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(response => {
        this.getRoutines(this.state.user.id);
      })
      .catch(err => console.log(`deleteRoutine err: ${err}`));
  }
  // !!Edit Routine based on routine_id in argument, edited body from routine argument,
  // and user_id from state!!
  editRoutine(routine, routineId) {
    axios({
      url: `https://wise-guy.herokuapp.com/users/${
        this.state.user.id
      }/routines/${routineId}`,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      },
      data: routine
    })
      .then(response => {
        this.getRoutines(this.state.user.id);
      })
      .catch(err => console.log(`editRoutine err: ${err}`));
  }

  // !!JOKES, JOKES, JOKES!!

  // !!Get all jokes with user_id as an argument!!
  getJokes(userId) {
    axios({
      url: `https://wise-guy.herokuapp.com/users/${userId}/jokes/`,
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(response => {
        this.setState({ jokes: response.data });
      })
      .catch(err => console.log(`getJokes err: ${err}`));
  }
  // !!Post new Routine with user-id from state, new joke data from newJoke argument!!
  addJoke(newJoke) {
    axios({
      url: `https://wise-guy.herokuapp.com/users/${this.state.user.id}/jokes`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      },
      data: newJoke
    })
      .then(response => {
        this.getJokes(this.state.user.id);
      })
      .catch(err => {
        console.log(`addJoke err: ${err}`);
        const errorValues = Object.values(err);
        console.log("addJoke errorCatch", errorValues[2].status);
        if (errorValues[2].status === 422) {
          alert(
            "Please use a real number for the estimated number of minutes!"
          );
        }
      });
  }
  // !!Delete Joke based on joke_id from argument, user_id from state!!
  deleteJoke(jokeId) {
    axios({
      url: `https://wise-guy.herokuapp.com/users/${
        this.state.user.id
      }/jokes/${jokeId}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(response => {
        this.getJokes(this.state.user.id);
        this.getRoutineJokes(this.state.oneRoutine.id);
      })
      .catch(err => console.log(`deleteJoke err: ${err}`));
  }
  // !!Edit Joke based on joke form data and jokeId arguments, user_id from state!!
  editJoke(joke, jokeId) {
    axios({
      url: `https://wise-guy.herokuapp.com/users/${
        this.state.user.id
      }/jokes/${jokeId}`,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      },
      data: joke
    })
      .then(response => {
        this.getJokes(this.state.user.id);
        this.getRoutineJokes(this.state.oneRoutine.id);
      })
      .catch(err => console.log(`editJoke err: ${err}`));
  }

  // !!ROUTINES w/JOKES, ROUTINES w/JOKES, ROUTINES w/JOKES!!

  // !!Renders all jokes linked to a specific routine via routine_id as argument
  // (found on BuildPage component)!!
  getRoutineJokes(routine_id) {
    console.log("getRoutineJokes");
    axios({
      url: `https://wise-guy.herokuapp.com/routines_with_jokes/${routine_id}`,
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(response => {
        this.setState({ routineJokes: response.data });
      })
      .catch(err => console.log(`getRoutineJokes err: ${err}`));
  }
  // !!Adds a joke to the current routine linked to a specific routine via routine_id
  // and joke_id as arguments ((found on BuildRoutine component)!!
  addJokeToRoutine(routine_id, joke_id) {
    axios({
      url: `https://wise-guy.herokuapp.com/routines_with_jokes/${routine_id}/jokes/${joke_id}`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(response => {
        this.getRoutineJokes(this.state.oneRoutine.id);
      })
      .catch(err => {
        console.log(`addJokeToRoutine err: ${err}`);
        const errorValues = Object.values(err);
        console.log("addJokeToRoutine errorCatch", errorValues[2].status);
        if (errorValues[2].status === 422) {
          alert("This joke is already part of this routine!");
        }
      });
  }

  postJokeToRoutine(newJoke) {
    axios({
      url: `https://wise-guy.herokuapp.com/users/${this.state.user.id}/jokes`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      },
      data: newJoke
    })
      .then(response => {
        this.setState({ oneJoke: response.data });
        this.getJokes(this.state.user.id);
        this.addJokeToRoutine(this.state.oneRoutine.id, this.state.oneJoke.id);
      })
      .catch(err => {
        console.log(`postJokeToRoutine err: ${err}`);
        const errorValues = Object.values(err);
        console.log("postJokeToRoutine errorCatch", errorValues[2].status);
        if (errorValues[2].status === 422) {
          alert(
            "Please use a real number for the estimated number of minutes!"
          );
        }
      });
  }
  // !!Deletes a specific joke from the current routine  via routine_id
  // and joke_id as arguments ((found on BuildRoutine component)!!
  deleteRoutineJoke(routine_id, joke_id) {
    axios({
      url: `https://wise-guy.herokuapp.com/routines_with_jokes/${routine_id}/jokes/${joke_id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(response => {
        this.getRoutineJokes(this.state.oneRoutine.id);
      })
      .catch(err => console.log(`deleteRoutineJoke err: ${err}`));
  }

  // !!!AUTH AUTH AUTH!!!

  register(data) {
    axios("https://wise-guy.herokuapp.com/users/", {
      method: "POST",
      data
    })
      .then(resp => {
        TokenService.save(resp.data.token);
        this.setState({
          user: resp.data.user,
          isLoggedIn: true
        });
        this.getRoutines(this.state.user.id);
        this.getJokes(this.state.user.id);
      })
      .catch(err => {
        console.log(`register err: ${err}`);
        const errorValues = Object.values(err);
        console.log("register errorCatch", errorValues[2].status);
        if (errorValues[2].status === 401) {
          alert("Sorry, that email is already taken. Try another!");
        }
      });
  }

  login(data) {
    axios("https://wise-guy.herokuapp.com/users/login", {
      method: "POST",
      data
    })
      .then(resp => {
        TokenService.save(resp.data.token);
        this.setState({
          user: resp.data.user,
          isLoggedIn: true
        });
        this.getRoutines(this.state.user.id);
        this.getJokes(this.state.user.id);
      })
      .catch(err => {
        console.log(`login err: ${err}`);
        const errorValues = Object.values(err);
        console.log("login errorCatch", errorValues[2].status);
        if (errorValues[2].status === 401) {
          alert(
            "Login failed! Incorrect credentials, or user does no exist. Woah! Trippy"
          );
        }
      });
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
          <Router>
            <Switch>
              <Route
                exact
                path="/routines/:id"
                render={props => (
                  <BuildPage
                    {...props}
                    deleteJoke={this.deleteJoke}
                    editJoke={this.editJoke}
                    jokes={this.state.jokes}
                    user={this.state.user}
                    routineJokes={this.state.routineJokes}
                    oneRoutine={this.state.oneRoutine}
                    getOneRoutine={this.getOneRoutine}
                    getRoutineJokes={this.getRoutineJokes}
                    postJokeToRoutine={this.postJokeToRoutine}
                    addJokeToRoutine={this.addJokeToRoutine}
                    deleteRoutineJoke={this.deleteRoutineJoke}
                    logout={this.logout}
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
                    logout={this.logout}
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
                    logout={this.logout}
                  />
                )}
              />
              <Route
                exact
                path="/profile"
                render={props => (
                  <ProfilePage
                    {...props}
                    user={this.state.user}
                    logout={this.logout}
                  />
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
