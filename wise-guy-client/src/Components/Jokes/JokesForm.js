import React, { Component } from "react";
import { Button, Form, Icon } from "semantic-ui-react";

class JokesForm extends Component {
  constructor(props) {
    super(props);
    this.state = { jokes: {} };
    this.submitJoke = this.submitJoke.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
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
    // this.setState({jokes: {user_id: this.props.user.id}})
    // console.log("Joke submitJoke", this.state)
    e.preventDefault();
    this.props.addJoke(this.state);
  }

  render() {
    return (
      <div>
        <h3>Add a joke!</h3>
        <Form onSubmit={this.submitJoke}>
          <Form.Field>
            <label>Give a title to your joke here</label>
            <input
              onChange={this.changeHandler}
              type="text"
              placeholder="Joke name"
              name="name"
              value={this.state.jokes.name}
            />
          </Form.Field>
          <Form.Field>
            <label>Write out the joke here</label>
            <input
              onChange={this.changeHandler}
              type="text"
              placeholder="Joke text"
              name="joke_text"
              value={this.state.jokes.joke_text}
            />
          </Form.Field>
          <Form.Field>
            <label>How long is the joke?</label>
            <input
              onChange={this.changeHandler}
              type="text"
              placeholder="Joke length"
              name="estimated_length"
              value={this.state.jokes.estimated_length}
            />
          </Form.Field>
          <Button color="green" icon labelPosition="left">
            <Icon name="right arrow" />
            Submit joke!
          </Button>
        </Form>
      </div>
    );
  }
}

export default JokesForm;
