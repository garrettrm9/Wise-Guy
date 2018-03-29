import React, { Component } from "react";
// import Nav from '../Profile/Nav'
import RoutinesList from "./RoutinesList";
import RoutinesForm from "./RoutinesForm";

class RoutinesPage extends Component {
  render() {
    const firstName = this.props.user.first_name;
    return (
      <div>
        <h2 className="header">
          These perfect routines were written by {firstName}
        </h2>
        <RoutinesList
          deleteRoutine={this.props.deleteRoutine}
          editRoutine={this.props.editRoutine}
          routines={this.props.routines}
        />
        <RoutinesForm
          addRoutine={this.props.addRoutine}
          user={this.props.user}
        />
      </div>
    );
  }
}

export default RoutinesPage;

// <Nav/>
