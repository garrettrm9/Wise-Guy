import React, { Component } from "react";
import { Button, Icon, Modal, Form, Label } from "semantic-ui-react";

class EditJokeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { jokes: {} };
    this.changeHandler = this.changeHandler.bind(this);
    this.sendEditedJoke = this.sendEditedJoke.bind(this);
  }

  sendEditedJoke(e) {
    e.preventDefault();
    // console.log("joke sendEditedJoke", this.props.joke.id);
    this.props.editJoke(this.state, this.props.joke.id);
  }

  changeHandler(e) {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      prevState.jokes[key] = value;
      return prevState;
    });
    // console.log("routine editHandler", this.state)
  }

  render() {
    const joke = this.props.joke;
    const name = joke.name;
    const joke_text = joke.joke_text;
    const estimated_length = joke.estimated_length;
    return (
      <Modal
        trigger={
          <Button id="button" compact={true} color="brown">
            Edit this joke
          </Button>
        }
        closeIcon={
          <div>
            <Button
              color="green"
              icon
              position="left"
              onClick={this.sendEditedJoke}
            >
              <Icon name="down arrow" />
              Submit your edits!
            </Button>
            <Button color="grey">Never mind</Button>
          </div>
        }
      >
        <Modal.Header>Edit this joke</Modal.Header>
        <Modal.Description>
          <Form>
            <Form.Field>
              <Label pointing="below" size="big">
                Change the joke's title here
              </Label>
              <input
                onChange={this.changeHandler}
                type="text"
                placeholder={name}
                name="name"
                value={this.state.jokes.name}
                autoComplete="off"
              />
            </Form.Field>
            <Form.Field>
              <Label pointing="below" size="big">
                Re-write the joke's content here
              </Label>
              <input
                onChange={this.changeHandler}
                type="text"
                placeholder={joke_text}
                name="joke_text"
                value={this.state.jokes.joke_text}
                autoComplete="off"
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
                value={this.state.jokes.estimated_length}
                autoComplete="off"
              />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal>
    );
  }
}
export default EditJokeForm;
