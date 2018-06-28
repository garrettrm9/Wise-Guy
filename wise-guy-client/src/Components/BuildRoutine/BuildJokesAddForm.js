import React, { Component } from "react";
import { Button, Form, Icon, Label, Modal } from "semantic-ui-react";

class BuildJokesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = { jokes: {} };
    this.submitJoke = this.submitJoke.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    // this.addJokeHandler = this.addJokeHandler.bind(this);
  }

  //grabs changes in form below, stores in joke state, also grabs user_id from props
  //and adds to joke state, fulfilling all params for POST request
  changeHandler(e) {
    // console.log("submitNewJoke", this.props.user.id)
    // console.log("Joke changeHandler", this.state)
    // this.setState({jokes: {user_id: this.props.user.id}})
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      prevState.jokes[key] = value;
      prevState.jokes.user_id = this.props.user.id;
      return prevState;
    });
  }

  submitJoke(e) {
    // console.log("Joke submitJoke", this.state.jokes);
    e.preventDefault();
    this.props.postJokeToRoutine(this.state);
    // this.addJokeHandler(this.props.oneRoutine.id, this.props.oneJoke.id);
  }

  // addJokeHandler(routineID, jokeID) {
  //   console.log("first addJokeHandler", routineID);
  //   console.log("first addJokeHandler", jokeID);
  //   // this.props.addJokeToRoutine(routineID, jokeID);
  // }

  render() {
    return (
      <Modal
        trigger={
          <Button id="button" circular size="large" color="green">
            Add a new joke!
          </Button>
        }
        closeIcon={
          <div>
            <Button
              color="green"
              icon
              labelPosition="left"
              onClick={this.submitJoke}
            >
              <Icon name="down arrow" />
              Submit joke!
            </Button>
            <Button color="grey">Never mind</Button>
          </div>
        }
      >
        <Modal.Header>Add a joke!</Modal.Header>
        <Modal.Description>
          <Form>
            <Form.Field>
              <Label pointing="below" size="big">
                Give a title to your joke here
              </Label>
              <input
                onChange={this.changeHandler}
                type="text"
                placeholder="Joke name"
                name="name"
                value={this.state.jokes.name}
              />
            </Form.Field>
            <Form.Field>
              <Label pointing="below" size="big">
                Write out the joke here
              </Label>
              <input
                onChange={this.changeHandler}
                type="text"
                placeholder="Joke text"
                name="joke_text"
                value={this.state.jokes.joke_text}
              />
            </Form.Field>
            <Form.Field>
              <Label pointing="below" size="big">
                How long is the joke?
              </Label>
              <input
                onChange={this.changeHandler}
                type="text"
                placeholder="Joke length"
                name="estimated_length"
                value={this.state.jokes.estimated_length}
              />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal>
    );
  }
}

export default BuildJokesAddForm;
