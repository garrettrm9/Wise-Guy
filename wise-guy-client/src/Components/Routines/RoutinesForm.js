import React, { Component } from "react";
import { Button, Form, Icon, Label, Modal } from "semantic-ui-react";

class RoutinesForm extends Component {
  constructor(props) {
    super(props);
    this.state = { routines: {} };
    this.submitRoutine = this.submitRoutine.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  submitRoutine(e) {
    e.preventDefault();
    this.props.addRoutine(this.state);
    // console.log("Routine submitRoutine",this.state)
  }

  //grabs changes in form below, stores in routines state, also grabs user_id from props
  //and adds to routines state, fulfilling all params for POST request
  changeHandler(e) {
    // console.log("Routine changeHandler", his.state)
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      prevState.routines[key] = value;
      prevState.routines.user_id = this.props.user.id;
      return prevState;
    });
  }

  render() {
    return (
      <Modal
        trigger={
          <Button circular size="large" color="green">
            Add a new routine!
          </Button>
        }
        closeIcon={
          <div>
            <Button
              color="green"
              icon
              labelPosition="left"
              onClick={this.submitRoutine}
            >
              <Icon name="down arrow" />
              Submit this routine!
            </Button>
            <Button color="grey">Never mind</Button>
          </div>
        }
      >
        <Modal.Header>Add a routine!</Modal.Header>
        <Modal.Description>
          <Form>
            <h2>Add a routine!</h2>
            <Form.Field>
              <Label pointing="below" size="big">
                Name your routine here
              </Label>
              <input
                onChange={this.changeHandler}
                type="text"
                placeholder="Routine name"
                name="name"
                value={this.state.routines.name}
              />
            </Form.Field>
            <Form.Field>
              <Label pointing="below" size="big">
                How long is this routine?
              </Label>
              <input
                onChange={this.changeHandler}
                type="text"
                placeholder="Estimated length"
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

export default RoutinesForm;
