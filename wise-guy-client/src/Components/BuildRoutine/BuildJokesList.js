import React, { Component } from "react";
import BuildJokes from "./BuildJokes";
import { Button, Modal } from "semantic-ui-react";

class BuildJokesList extends Component {
  constructor(props) {
    super(props);
    this.renderJokes = this.renderJokes.bind(this);
  }

  renderJokes(joke, index) {
    return (
      <BuildJokes
        joke={joke}
        index={index}
        oneRoutine={this.props.oneRoutine}
        deleteJoke={this.props.deleteJoke}
        editJoke={this.props.editJoke}
        addJokeToRoutine={this.props.addJokeToRoutine}
        key={joke.id}
      />
    );
  }

  render() {
    const jokes = this.props.jokes.map(this.renderJokes);
    return (
      <Modal
        trigger={
          <Button circular size="large" color="brown">
            See all your jokes!
          </Button>
        }
        closeIcon={<Button color="grey">Never mind</Button>}
      >
        <Modal.Header>Every joke you've written!</Modal.Header>
        <Modal.Description>{jokes}</Modal.Description>
      </Modal>
    );
  }
}

export default BuildJokesList;
