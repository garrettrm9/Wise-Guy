import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <Dropdown text="Menu" className="nav_bar_container">
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to="/profile">Profile</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/jokes">Jokes</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/routines">Routines</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/landing" onClick={this.props.logout}>
              Sign out
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default Nav;
