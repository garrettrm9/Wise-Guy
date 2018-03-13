import React, { Component } from "react";
import Routines from "./Routines";

class RoutinesList extends Component {
  constructor(props) {
    super(props);
    this.renderRoutines = this.renderRoutines.bind(this);
  }

  renderRoutines(routineDatum, index) {
    console.log("renderRoutines:", index);
    return (
      <Routines
        routineDatum={routineDatum}
        index={index}
      />
    )
  }

  componentDidMount() {
    this.props.getRoutines();
  }

  render() {
    // console.log("RoutinesList render:", this.props.routines);
    this.props.routines.map(this.renderRoutines);
    return (
      <div>
        <h2>Hello from RoutinesList!!!</h2>
      </div>  
    )
  }
}

export default RoutinesList;
