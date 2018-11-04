import { connect } from 'react-redux';
import { action } from 'Src/utils';
import Chat from './Chat';

const mapDispatchToProps = dispatch => ({
  initChat: () => dispatch(action('FETCH_INIT_CHAT_BEGIN'))
});

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
