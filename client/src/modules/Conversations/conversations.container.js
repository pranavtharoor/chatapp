import { connect } from 'react-redux';
import { pick } from 'ramda';
import { action } from 'Src/utils';
import Conversations from './Conversations';

const mapDispatchToProps = dispatch => ({
  fetchConversations: () => dispatch(action('FETCH_CONVERSATIONS_BEGIN')),
  openChat: data => dispatch(action('OPEN_CHAT', data))
});

const mapStateToProps = state => ({
  ...pick(['conversations'], state.conversations)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversations);
