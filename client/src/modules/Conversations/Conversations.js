import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Conversations extends Component {
  static propTypes = {
    fetchConversations: PropTypes.func.isRequired,
    conversations: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        participantId: PropTypes.number.isRequired,
        participantEmail: PropTypes.string.isRequired,
        participantName: PropTypes.string.isRequired
      })
    ).isRequired,
    openChat: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchConversations();
  }

  render() {
    return (
      <div>
        {this.props.conversations.map((conversation, i) => (
          <div key={`conversation_${i}`}>
            {conversation.participantName} {conversation.participantEmail}
            <button onClick={() => this.props.openChat(conversation)}>
              Chat
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Conversations;
