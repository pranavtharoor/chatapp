import React from 'react';
import PropTypes from 'prop-types';
import './user.scss';

const User = props => (
  <div className="user">
    <div className="name">{props.name}</div>
    <div className="email">{props.email}</div>
    {props.unread && <div className="unread" />}
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  unread: PropTypes.bool
};

export default User;
