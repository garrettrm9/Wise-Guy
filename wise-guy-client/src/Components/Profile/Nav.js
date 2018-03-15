import React, { Component } from "react";

class Nav extends Component {

  render(){
    return(
      <div>
        <h1>Greetings from nav bar!!</h1>
        <button>Return to profile page</button>
        <button onClick={this.props.logout}>Sign out</button>
      </div>
    )
  }

}

export default Nav