import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

class Routines extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, routines: {} };
    this.deleteHandler = this.deleteHandler.bind(this);
    this.editFormHandler = this.editFormHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.sendEditedRoutine = this.sendEditedRoutine.bind(this);
  }

  deleteHandler(e) {
    e.preventDefault();
    this.props.deleteRoutine(this.props.routine.id);
  }

  editFormHandler(e) {
    e.preventDefault();
    this.setState(prevState => {
      prevState.isEditing = !prevState.isEditing;
      return prevState;
    });
  }

  sendEditedRoutine(e) {
    e.preventDefault();
    this.props.editRoutine(this.state, this.props.routine.id);
    this.setState({ isEditing: false });
  }

  changeHandler(e) {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      prevState.routines[key] = value;
      return prevState;
    });
    // console.log("routine editHandler", this.state)
  }

  render() {
    const routine = this.props.routine;
    const id = routine.id;
    const name = routine.name;
    const estimated_length = routine.estimated_length;
    let maybeFormOpen = null;
    if (this.state.isEditing) {
      maybeFormOpen = (
        <div className="routine_form">
          <Form onSubmit={this.sendEditedRoutine}>
            <Form.field>
              <label>Edit this routine</label>
              <input
                onChange={this.changeHandler}
                type="text"
                placeholder={name}
                name="name"
                value={this.state.routines.name}
              />
            </Form.field>
            <Form.field>
              <input
                onChange={this.changeHandler}
                type="text"
                placeholder={estimated_length}
                name="estimated_length"
                value={this.state.routines.estimated_length}
              />
            </Form.field>
            <button onClick={this.editFormHandler}>
              Never mind, screw that edit
            </button>
            <button>Submit edited routine</button>
          </Form>
        </div>
      );
    }
    return (
      <ul>
        <li>Routine name: {name}</li>
        <li>Estimated length: {estimated_length}</li>
        <br />
        <Button color="red" onClick={this.deleteHandler}>
          Delete this routine
        </Button>
        <Button color="black" onClick={this.editFormHandler}>
          Edit this routine
        </Button>
        <Link to={`/routines/${id}`}>
          <Button color="yellow">Add jokes to this routine</Button>
        </Link>
        {maybeFormOpen}
      </ul>
    );
  }
}
export default Routines;
