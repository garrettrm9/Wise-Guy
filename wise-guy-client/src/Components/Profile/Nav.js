import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    const userName = this.props.user.email;
    const firstName = this.props.user.first_name;
    const lastName = this.props.user.last_name;
    return (
      <div className="nav_bar">
        <h3>
          The hilarious comedy of {firstName} {lastName}
        </h3>
        <button onClick={this.props.logout}>Sign out of {userName}</button>
      </div>
    );
  }
}

export default Nav;
