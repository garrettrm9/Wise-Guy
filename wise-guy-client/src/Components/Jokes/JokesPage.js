import React, { Component } from "react";
// import Nav from '../Profile/Nav'
import JokesList from './JokesList'
import JokesForm from './JokesForm'

class JokesPage extends Component {

  render(){
    return(
      <div>
        <h2>Greetings from JokesPage</h2>
        <JokesList
          deleteJoke={this.props.deleteJoke}
          editJoke={this.props.editJoke}
          jokes={this.props.jokes}
        />
        <JokesForm
          addJoke={this.props.addJoke}
          user={this.props.user}
        />
      </div>  
    )
  }

}

export default JokesPage

        // <Nav/>
