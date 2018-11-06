import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from 'Src/modules/Message';
import './chatBox.scss';

class ChatBox extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        message: PropTypes.string.isRequired,
        senderId: PropTypes.number.isRequired,
        conversationId: PropTypes.number.isRequired
      })
    ).isRequired,
    id: PropTypes.number
  };

  componentDidUpdate(prevProps) {
    if (prevProps.messages.length !== this.props.messages.length)
      this.chatBox.scrollTop = this.chatBox.scrollHeight;
  }

  render() {
    return (
      <div className="chat-box" ref={el => (this.chatBox = el)}>
        {this.props.messages.map((message, i) => (
          <Message
            key={`message_${i}`}
            message={message.message}
            type={this.props.id === message.senderId ? 'right' : 'left'}
          />
        ))}
      </div>
    );
  }
}

export default ChatBox;
