import { connect } from 'react-redux';
import { pick } from 'ramda';
import ChatHeader from './ChatHeader';

const mapDispatchToProps = () => ({});

const mapStateToProps = state => ({
  ...pick(['participantName', 'participantEmail'], state.header)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatHeader);
