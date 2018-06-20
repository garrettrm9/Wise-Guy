import React, { Component } from "react";
import { Button, Form, Icon } from "semantic-ui-react";

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
      <div>
        <h3>Add a routine!</h3>
        <Form onSubmit={this.submitRoutine}>
          <Form.Field>
            <label>Name your routine here</label>
            <input
              onChange={this.changeHandler}
              type="text"
              placeholder="Routine name"
              name="name"
              value={this.state.routines.name}
            />
          </Form.Field>
          <Form.Field>
            <label>How long is this routine?</label>
            <input
              onChange={this.changeHandler}
              type="text"
              placeholder="Estimated length"
              name="estimated_length"
              value={this.state.routines.estimated_length}
            />
          </Form.Field>
          <Button color="green" icon labelPosition="left">
            <Icon name="right arrow" />
            Submit routine!
          </Button>
        </Form>
      </div>
    );
  }
}

export default RoutinesForm;
