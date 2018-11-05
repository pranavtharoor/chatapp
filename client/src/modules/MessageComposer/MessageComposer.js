import React, { Component } from 'react';
import { socketConnect } from 'socket.io-react';
import PropTypes from 'prop-types';

class MessageComposer extends Component {
  static propTypes = {
    socket: PropTypes.object.isRequired
  };

  sendMessage() {
    this.props.socket.emit('send message', 'Hello world!');
  }

  render() {
    return (
      <div>
        <button onClick={() => this.sendMessage()}>send</button>
      </div>
    );
  }
}

export default socketConnect(MessageComposer);
