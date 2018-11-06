import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from 'Src/modules/User';
import './conversations.scss';

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
      <div className="conversations">
        {this.props.conversations.map((conversation, i) => (
          <div
            key={`conversation_${i}`}
            onClick={() => this.props.openChat(conversation)}
          >
            <User
              name={conversation.participantName}
              email={conversation.participantEmail}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Conversations;
