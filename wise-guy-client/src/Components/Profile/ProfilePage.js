import React, { Component } from "react";
import Nav from './Nav'
import JokesPrev from './JokesPrev'
import RoutinesPrev from './RoutinesPrev'

class ProfilePage extends Component {

  render(){
    return(
      <div>  
        <Nav logout={this.props.logout}/>
        <h1>Welcome to profile page!</h1>
        <JokesPrev/>
        <RoutinesPrev/>
      </div>  
    )
  }

}

export default ProfilePage

/*!!Needs link!!!!*/
