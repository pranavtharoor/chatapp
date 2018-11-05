import React from 'react';
import PropTypes from 'prop-types';

const ChatBox = props => <div>Chat box{props.messages}</div>;

ChatBox.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default ChatBox;
