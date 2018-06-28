import React, { Component } from "react";
import { Button, Modal, Form, Label, Icon } from "semantic-ui-react";

class EditRoutineForm extends Component {
  constructor(props) {
    super(props);
    this.state = { routines: {} };
    this.changeHandler = this.changeHandler.bind(this);
    this.sendEditedRoutine = this.sendEditedRoutine.bind(this);
  }

  sendEditedRoutine(e) {
    e.preventDefault();
    console.log("joke sendEditedRoutine", this.props.routine.id);
    this.props.editRoutine(this.state, this.props.routine.id);
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
    const name = routine.name;
    const estimated_length = routine.estimated_length;
    return (
      <Modal
        trigger={
          <Button id="button" compact={true} color="grey">
            Edit this routine
          </Button>
        }
        closeIcon={
          <div>
            <Button
              color="green"
              icon
              position="left"
              onClick={this.sendEditedRoutine}
            >
              <Icon name="down arrow" />
              Submit your edits!
            </Button>
            <Button color="grey">Never mind</Button>
          </div>
        }
      >
        <Modal.Header>Edit this routine</Modal.Header>
        <Modal.Description>
          <Form>
            <Form.Field>
              <Label pointing="below" size="big">
                Change the routine's title here
              </Label>
              <input
                onChange={this.changeHandler}
                type="text"
                placeholder={name}
                name="name"
                value={this.state.routines.name}
              />
            </Form.Field>
            <Form.Field>
              <Label pointing="below" size="big">
                Update the estimated length here
              </Label>
              <input
                onChange={this.changeHandler}
                type="text"
                placeholder={estimated_length}
                name="estimated_length"
                value={this.state.routines.estimated_length}
              />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal>
    );
  }
}
export default EditRoutineForm;
