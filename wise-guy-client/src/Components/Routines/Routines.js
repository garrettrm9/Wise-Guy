import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Paper from "@material-ui/core/Paper";
import EditRoutineForm from "./EditRoutineForm";

class Routines extends Component {
  constructor(props) {
    super(props);
    this.deleteHandler = this.deleteHandler.bind(this);
    // this.editFormHandler = this.editFormHandler.bind(this);
  }

  deleteHandler(e) {
    e.preventDefault();
    this.props.deleteRoutine(this.props.routine.id);
  }

  // editFormHandler(e) {
  //   e.preventDefault();
  //   this.setState(prevState => {
  //     prevState.isEditing = !prevState.isEditing;
  //     return prevState;
  //   });
  // }

  render() {
    const routine = this.props.routine;
    const id = routine.id;
    const name = routine.name;
    const estimated_length = routine.estimated_length;
    return (
      <Paper elevation={20} className="tile">
        <li>
          <span>Routine name:</span> {name}
        </li>
        <li>
          <span>Estimated length:</span> {estimated_length}
        </li>
        <br />
        <Button compact={true} color="red" onClick={this.deleteHandler}>
          Delete this routine
        </Button>
        <EditRoutineForm
          routine={routine}
          editRoutine={this.props.editRoutine}
        />
        <Link to={`/routines/${id}`}>
          <Button compact={true} color="black">
            Build this routine
          </Button>
        </Link>
      </Paper>
    );
  }
}
export default Routines;
