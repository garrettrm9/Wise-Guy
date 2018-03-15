import React, { Component } from "react";
import Routines from "./Routines";

class RoutinesList extends Component {
  constructor(props) {
    super(props);
    this.state = {routines:{}}
    this.renderRoutines = this.renderRoutines.bind(this);
    this.submitRoutine = this.submitRoutine.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  renderRoutines(routine, index) {
    // console.log("renderRoutines:", index);
    return (
      <Routines
        routine={routine}
        index={index}
        deleteRoutine={this.props.deleteRoutine}
        editRoutine={this.props.editRoutine}
      />
    )
  }

  //grabs changes in form below, stores in routines state, also grabs user_id from props
  //and adds to routines state, fulfilling all params for POST request
  changeHandler(e){
    // console.log("Routine changeHandler", his.state)
    e.preventDefault()
    const key = e.target.name
    const value = e.target.value
    this.setState(prevState => {
      prevState.routines[key] = value
      prevState.routines.user_id = this.props.user.id
      return prevState
    })
  }

  submitRoutine(e){
    e.preventDefault()
    this.props.addRoutine(this.state)
    console.log("Routine submitRoutine",this.state)
  }

  componentDidMount() {
    // this.props.getRoutines(this.props.user.id);
    console.log("RoutinesList didmount", this.props.user)
    // this.setState({routines: {user_id: this.props.user.id}})    
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
              <input onChange={this.changeHandler} type='text' placeholder='Routine name' name='name' value={this.state.routines.name}/>
              <input onChange={this.changeHandler} type='text' placeholder='Estimated length' name='estimated_length' value={this.state.routines.estimated_length}/>
            <button>Submit new routine</button>
          </form>
        </div>
      </div>  
    )
  }
}

export default RoutinesList;
