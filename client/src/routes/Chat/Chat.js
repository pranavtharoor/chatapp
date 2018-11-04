import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './chat.scss';

class Chat extends Component {
  static propTypes = {
    initChat: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.initChat();
  }

  render() {
    return <div className="chat-page">Hello</div>;
  }
}

export default Chat;
