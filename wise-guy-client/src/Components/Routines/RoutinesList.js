import React, { Component } from "react";
import Routines from "./Routines";

class RoutinesList extends Component {
  constructor(props) {
    super(props);
    this.renderRoutines = this.renderRoutines.bind(this);
  }

  renderRoutines(routine, index) {
    return (
      <Routines
        routine={routine}
        index={index}
        deleteRoutine={this.props.deleteRoutine}
        editRoutine={this.props.editRoutine}
        key={routine.id}
      />
    );
  }

  render() {
    const routines = this.props.routines.map(this.renderRoutines);
    return <div>{routines}</div>;
  }
}

export default RoutinesList;
