import React from 'react';
import PropTypes from 'prop-types';

const ChatHeader = props => (
  <div>
    {props.participantName}
    {props.participantEmail}
  </div>
);

ChatHeader.propTypes = {
  participantName: PropTypes.string.isRequired,
  participantEmail: PropTypes.string.isRequired
};

export default ChatHeader;
