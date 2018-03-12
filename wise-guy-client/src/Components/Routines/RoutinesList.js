import React, { Component } from "react";

  class RoutinesList extends Component {

    // constructor(props){
    //   super(props)
    // }

    componentDidMount(){
      this.props.getRoutines()
    }    

    render(){
      return(
        <h2>Hello from RoutinesList!!!</h2>
      )
    }

  }

export default RoutinesList