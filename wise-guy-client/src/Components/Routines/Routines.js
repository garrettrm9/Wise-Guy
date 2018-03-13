import React, { Component } from "react";

class Routines extends Component {

  render() {
    const routineDatum = this.props.routineDatum;
    const id = routineDatum.id;
    const user_id = routineDatum.user_id
    const name = routineDatum.name
    const estimated_length = routineDatum.estimated_length
    return (
      <ul key={id.toString()}>
        <li>User_id: {user_id}</li>
        <li>Routine id: {id}</li>
        <li>Routine name: {name}</li>  
        <li>Estimated length: {estimated_length}</li>
      </ul>  
    )
  }
}

export default Routines;
