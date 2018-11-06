import React from 'react';
import PropTypes from 'prop-types';
import './user.scss';

const User = props => (
  <div className="user">
    <div className="name">{props.name}</div>
    <div className="email">{props.email}</div>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default User;
