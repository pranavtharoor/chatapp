import React from 'react';
import PropTypes from 'prop-types';

const ChatBox = props => (
  <div>
    Chat box{props.messages.map((message, i) => (
      <div
        style={{ textAlign: props.id === message.senderId ? 'right' : 'left' }}
        key={`message_${i}`}
      >
        {message.message}
      </div>
    ))}
  </div>
);

ChatBox.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      senderId: PropTypes.number.isRequired,
      conversationId: PropTypes.number.isRequired
    })
  ).isRequired,
  id: PropTypes.number
};

export default ChatBox;
