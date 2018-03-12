import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import RoutinesList from "./Components/Routines/RoutinesList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { routines: [] };
    this.getRoutines = this.getRoutines.bind(this);
  }

  getRoutines() {
    axios({ url: "http://localhost:3000/routines" }).then(response => {
      console.log("getRoutines:", response.data);
      this.setState({ routines: response.data });
      console.log("state, routines:", this.state.routines);
    });
  }

  // componentDidMount(){
  //   this.getRoutines()
  // }

  render() {
    return (
      <div className="App">
        <h1>Routines!</h1>
        <RoutinesList 
          getRoutines={this.getRoutines}
          routines={this.state.routines}
        />
      </div>
    );
  }
}

export default App;
