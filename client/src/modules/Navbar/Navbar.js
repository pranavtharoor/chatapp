import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

class Navbar extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    loggedIn: PropTypes.bool.isRequired
  };

  render() {
    return this.props.loggedIn ? (
      <div className="navbar loggedin">
        <div className="details">
          <div className="name">{this.props.name}</div>
          <div className="email">{this.props.email}</div>
        </div>
        <div className="options">
          <button className="logout" onClick={this.props.logout}>
            LOG OUT
          </button>
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
