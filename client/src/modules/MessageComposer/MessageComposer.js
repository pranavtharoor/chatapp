import React, { Component } from 'react';
import { socketConnect } from 'socket.io-react';
import PropTypes from 'prop-types';
import './messageComposer.scss';

class MessageComposer extends Component {
  static propTypes = {
    socket: PropTypes.object.isRequired,
    conversationId: PropTypes.number,
    senderId: PropTypes.number,
    participantEmail: PropTypes.string
  };

  state = {
    message: ''
  };

  sendMessage() {
    this.props.socket.emit('send message', {
      message: this.state.message,
      conversationId: this.props.conversationId,
      senderId: this.props.senderId,
      participantEmail: this.props.participantEmail
    });
    this.setState({ message: '' });
  }

  render() {
    return (
      <div className="message-composer">
        <input
          value={this.state.message}
          onChange={e =>
            this.props.conversationId &&
            this.setState({ message: e.target.value })
          }
          onKeyPress={e =>
            e.key === 'Enter' && this.props.conversationId && this.sendMessage()
          }
        />
        <button onClick={() => this.props.conversationId && this.sendMessage()}>
          SEND
        </button>
      </div>
    );
  }
}

export default socketConnect(MessageComposer);
