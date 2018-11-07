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
        participantName: PropTypes.string.isRequired,
        unread: PropTypes.bool
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
              unread={conversation.unread}
            />
          </div>
        ))}
        {this.props.conversations.length === 0 && (
          <div className="fallback">
            Use the search bar to find other users and start your first
            conversation.
          </div>
        )}
      </div>
    );
  }
}

export default Conversations;
