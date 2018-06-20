import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
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
      <ul>
        <li>Routine name: {name}</li>
        <li>Estimated length: {estimated_length}</li>
        <br />
        <Button color="red" onClick={this.deleteHandler}>
          Delete this routine
        </Button>
        <EditRoutineForm
          routine={routine}
          editRoutine={this.props.editRoutine}
        />
        <Link to={`/routines/${id}`}>
          <Button color="black" icon labelPosition="right">
            <Icon name="up arrow" />
            Add jokes to this routine
          </Button>
        </Link>
      </ul>
    );
  }
}
export default Routines;
