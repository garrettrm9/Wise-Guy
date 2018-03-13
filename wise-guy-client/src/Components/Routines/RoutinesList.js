import React, { Component } from "react";
import Routines from "./Routines";

class RoutinesList extends Component {
  constructor(props) {
    super(props);
    this.state = {newRoutines: []}
    this.renderRoutines = this.renderRoutines.bind(this);
    this.submitRoutine = this.submitRoutine.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  renderRoutines(routineDatum, index) {
    // console.log("renderRoutines:", index);
    return (
      <Routines
        routineDatum={routineDatum}
        index={index}
      />
    )
  }

  changeHandler(e){
    e.preventDefault()
    this.setState({newRoutines: {routines: {[e.target.name]: e.target.value}}})
    // console.log("Routine changeHandler",this.state)
  }

  submitRoutine(e){
    e.preventDefault()
    this.props.addRoutine(this.state.newRoutines)
    console.log("Routine submitRoutine",this.state)
  }

  componentDidMount() {
    this.props.getRoutines();
  }

  render() {
    // console.log("RoutinesList render:", this.props.routines);
    const routines = this.props.routines.map(this.renderRoutines);
    return (
      <div className="routines_container">
        <h2>Hello from RoutinesList!!!</h2>
        <div className="routines_list">{routines}</div>
        <div className="routines_form">
          <form onSubmit={this.submitRoutine}>
            <label>Add a routine! </label>
            <input onChange={this.changeHandler} type='text' placeholder='User_id' name='user_id'/>
            <input onChange={this.changeHandler} type='text' placeholder='Routine name' name='name'/>
            <input onChange={this.changeHandler} type='text' placeholder='Estimated length' name='estimated_length'/>
            <button>Submit</button>
          </form>
        </div>
      </div>  
    )
  }
}

export default RoutinesList;
