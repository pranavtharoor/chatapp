import React, { Component } from 'react';
import { socketConnect } from 'socket.io-react';
import PropTypes from 'prop-types';

class MessageComposer extends Component {
  static propTypes = {
    socket: PropTypes.object.isRequired,
    conversationId: PropTypes.number,
    senderId: PropTypes.number
  };

  state = {
    message: ''
  };

  sendMessage() {
    this.props.socket.emit('send message', {
      message: this.state.message,
      conversationId: this.props.conversationId,
      senderId: this.props.senderId
    });
    this.setState({ message: '' });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.message}
          onChange={e =>
            this.props.conversationId &&
            this.setState({ message: e.target.value })
          }
        />
        <button onClick={() => this.props.conversationId && this.sendMessage()}>
          send
        </button>
      </div>
    );
  }
}

export default socketConnect(MessageComposer);
