import React, { Component } from "react";
import Routines from "./Routines";

class RoutinesList extends Component {
  constructor(props) {
    super(props);
    this.renderRoutines = this.renderRoutines.bind(this);
  }

  renderRoutines(routine, index) {
    // console.log("renderRoutines:", index);
    return (
      <Routines
        routine={routine}
        index={index}
        deleteRoutine={this.props.deleteRoutine}
        editRoutine={this.props.editRoutine}
      />
    );
  }
  // componentDidMount() {
  //   this.props.getRoutines(this.props.user.id);
  //   this.setState({routines: {user_id: this.props.user.id}})
  // }

  render() {
    // console.log("RoutinesList render:", this.props.routines);
    const routines = this.props.routines.map(this.renderRoutines);
    return (
      <div className="routines_container">
        <h2>Hello from RoutinesList!!!</h2>
        <div className="routines_list">{routines}</div>
      </div>
    );
  }
}

export default RoutinesList;
