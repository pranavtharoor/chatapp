import { connect } from 'react-redux';
import { action } from 'Src/utils';
import { pick } from 'ramda';
import Chat from './Chat';

const mapDispatchToProps = dispatch => ({
  initChat: () => dispatch(action('FETCH_INIT_CHAT_BEGIN'))
});

const mapStateToProps = state => ({
  ...pick(['name', 'email', 'id', 'type'], state.common.userData)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
