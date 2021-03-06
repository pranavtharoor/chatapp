import { connect } from 'react-redux';
import { pick } from 'ramda';
import ChatBox from './ChatBox';

const mapDispatchToProps = () => ({});

const mapStateToProps = state => ({
  ...pick(['messages'], state.chat),
  ...pick(['id'], state.common.userData)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatBox);
