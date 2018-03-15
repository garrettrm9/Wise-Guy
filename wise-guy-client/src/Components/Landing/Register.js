import React, { Component } from "react";

  class Register extends Component {

    constructor(props){
      super(props)
      this.state = {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
      }
      this.changeHandler = this.changeHandler.bind(this)   
      this.registerUser = this.registerUser.bind(this)   
    }

    changeHandler(e){
      e.preventDefault()
      const key = e.target.name
      const value = e.target.value
      this.setState(prevState => {
        prevState[key] = value
        return prevState
      })
      // console.log("landing changeHandler", this.state)
    }

    registerUser(e){
      e.preventDefault()
      this.props.register(this.state)
    }

    render(){
      return(
        <div className="registration_container">
         <form onSubmit={this.registerUser}>
            <h1>Give me all your DELICIOUS data</h1>
              <label>Register </label>
                <input onChange={this.changeHandler} type='text' placeholder='First name' name='first_name' value={this.state.first_name}/>
                <input onChange={this.changeHandler} type='text' placeholder='Last name' name='last_name' value={this.state.last_name}/>
                <input onChange={this.changeHandler} type='text' placeholder='Email' name='email' value={this.state.email}/>
                <input onChange={this.changeHandler} type='text' placeholder='Password' name='password' value={this.state.password}/>
              <button>Submit registration</button>
          </form>
        </div>
      )
    }
  }

export default Register