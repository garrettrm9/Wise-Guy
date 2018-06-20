import React, { Component } from "react";
// import Nav from '../Profile/Nav'
import RoutinesList from "./RoutinesList";
import RoutinesForm from "./RoutinesForm";
import Paper from "@material-ui/core/Paper";

class RoutinesPage extends Component {
  render() {
    const firstName = this.props.user.first_name;
    return (
      <Paper elevation={20} className="container">
        <h2 className="header">
          These perfect routines were written by {firstName}
        </h2>
        <RoutinesList
          deleteRoutine={this.props.deleteRoutine}
          editRoutine={this.props.editRoutine}
          routines={this.props.routines}
          user={this.props.user}
        />
        <br />
        <RoutinesForm
          addRoutine={this.props.addRoutine}
          user={this.props.user}
        />
      </Paper>
    );
  }
}

export default RoutinesPage;
