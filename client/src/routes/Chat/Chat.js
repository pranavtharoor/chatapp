import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Conversations from 'Src/modules/Conversations';
import MessageComposer from 'Src/modules/MessageComposer';
import SearchUser from 'Src/modules/SearchUser';
import ChatBox from 'Src/modules/ChatBox';
import ChatHeader from 'Src/modules/ChatHeader';
import './chat.scss';

class Chat extends Component {
  static propTypes = {
    initChat: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.initChat();
  }

  render() {
    return (
      <div className="chat-page">
        <Conversations />
        <SearchUser />
        <ChatHeader />
        <ChatBox />
        <MessageComposer />
      </div>
    );
  }
}

export default Chat;
