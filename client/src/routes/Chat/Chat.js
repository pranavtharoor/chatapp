import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Conversations from 'Src/modules/Conversations';
import MessageComposer from 'Src/modules/MessageComposer';
import SearchUser from 'Src/modules/SearchUser';
import ChatBox from 'Src/modules/ChatBox';
import ChatHeader from 'Src/modules/ChatHeader';
import { socketConnect } from 'socket.io-react';
import './chat.scss';

class Chat extends Component {
  static propTypes = {
    initChat: PropTypes.func.isRequired,
    socket: PropTypes.object.isRequired,
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    type: PropTypes.number
  };

  state = {
    id: null
  };

  componentDidMount() {
    if (!this.props.id) this.props.initChat();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.id !== prevState.id) {
      nextProps.socket.emit('login', {
        id: nextProps.id,
        name: nextProps.name,
        email: nextProps.email,
        type: nextProps.type
      });
    }
    return { id: nextProps.id };
  }

  render() {
    return (
      <div className="chat-page">
        <div className="side-panel">
          <SearchUser />
          <Conversations />
        </div>
        <div className="chat-main">
          <div className="chat-header-container">
            <ChatHeader />
          </div>
          <div className="chat-box-container">
            <ChatBox />
          </div>
          <div className="message-composer-container">
            <MessageComposer />
          </div>
        </div>
      </div>
    );
  }
}

export default socketConnect(Chat);
