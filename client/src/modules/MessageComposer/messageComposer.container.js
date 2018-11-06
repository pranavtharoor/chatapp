import { connect } from 'react-redux';
import MessageComposer from './MessageComposer';

const mapDispatchToProps = () => ({});

const mapStateToProps = state => ({
  conversationId: state.header.id,
  participantEmail: state.header.participantEmail,
  senderId: state.common.userData.id
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageComposer);
