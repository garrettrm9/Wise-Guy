import React, { Component } from "react";
// import Nav from '../Profile/Nav'
import RoutinesList from './RoutinesList'
import RoutinesForm from './RoutinesForm'

class RoutinesPage extends Component {

  render(){
    return(
      <div>    
        <h2>Greetings from RoutinesPage</h2>
        <RoutinesList
          deleteRoutine={this.props.deleteRoutine}
          editRoutine={this.props.editRoutine}
          routines={this.props.routines}
        />
        <RoutinesForm
          addRoutine={this.props.addRoutine}          
          user={this.props.user}
        />
      </div>  
    )
  }

}

export default RoutinesPage

        // <Nav/>
