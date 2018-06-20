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
        trigger={<Button color="grey">Edit this routine</Button>}
        closeIcon={<Button>Go back</Button>}
      >
        <Modal.Header>Edit this routine</Modal.Header>
        <Modal.Description>
          <Form onSubmit={this.sendEditedRoutine}>
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
            <Button color="green" icon position="left">
              <Icon name="up arrow" />
              Submit your edited routine!
            </Button>
          </Form>
        </Modal.Description>
      </Modal>
    );
  }
}
export default EditRoutineForm;