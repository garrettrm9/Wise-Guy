import React, { Component } from "react";

class Routines extends Component {

  constructor(props){
    super(props)
    this.state = {isEditing: false, routines:{} }
    this.deleteHandler = this.deleteHandler.bind(this)
    this.editFormHandler = this.editFormHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.sendEditedRoutine = this.sendEditedRoutine.bind(this)
  }

  deleteHandler(e){
    e.preventDefault()  
    this.props.deleteRoutine(this.props.routine.id)
  }

  editFormHandler(e){
    e.preventDefault()
    this.setState(prevState => {
      prevState.isEditing = !prevState.isEditing
      return prevState
    })
  }

  sendEditedRoutine(e){
    e.preventDefault()
    // console.log("routine editHandler", this.state.routines)
    this.props.editRoutine(this.state, this.props.routine.id)
    this.setState({isEditing: false})
  }

  changeHandler(e){
    e.preventDefault()
    const key = e.target.name
    const value = e.target.value
    this.setState(prevState => {
      prevState.routines[key] = value
      return prevState
    })
    // console.log("routine editHandler", this.state)
  }

  render() {
    const routine = this.props.routine;
    const id = routine.id;
    const user_id = routine.user_id
    const name = routine.name
    const estimated_length = routine.estimated_length
    if (this.state.isEditing) {
      return (
        <div className="routine_form">
          <form onSubmit={this.sendEditedRoutine}>
            <label>Edit this routine</label>
            <input onChange={this.changeHandler} type='text' placeholder='User_id' name='user_id' value={this.state.routines.user_id}/>
            <input onChange={this.changeHandler} type='text' placeholder='Routine name' name='name' value={this.state.routines.name}/>
            <input onChange={this.changeHandler} type='text' placeholder='Estimated length' name='estimated_length' value={this.state.routines.estimated_length}/>
            <button onClick={this.editFormHandler}>Never mind, screw that edit</button>
            <button>Submit edited routine</button>
          </form>
        </div>
      )
    }
    return (
      <ul key={id.toString()}>
        <li>User_id: {user_id}</li>
        <li>Routine id: {id}</li>
        <li>Routine name: {name}</li>  
        <li>Estimated length: {estimated_length}</li>
        <button onClick={this.deleteHandler}>Delete routine</button>
        <button onClick={this.editFormHandler}>Edit routine</button>
      </ul>  
    )
  }
}

export default Routines;
