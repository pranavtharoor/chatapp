import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

class Navbar extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    loggedIn: PropTypes.bool.isRequired
  };

  render() {
    return this.props.loggedIn ? (
      <div className="navbar loggedin">
        <div className="dropdown-container">
          <div className="dropdown">
            <div className="menu">
              <div className="name">{this.props.name}</div>
              <button className="nav-btn" onClick={this.props.logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="navbar loggedout">
        <NavLink exact={true} to="/login" activeClassName="active">
          LOGIN
        </NavLink>
        <NavLink exact={true} to="/register" activeClassName="active">
          REGISTER
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
