import React from 'react';
import PropTypes from 'prop-types';
import './chatHeader.scss';

const ChatHeader = props => (
  <div className="chat-header">
    <div className="name">{props.participantName}</div>
    <div className="email">{props.participantEmail}</div>
  </div>
);

ChatHeader.propTypes = {
  participantName: PropTypes.string.isRequired,
  participantEmail: PropTypes.string.isRequired
};

export default ChatHeader;
