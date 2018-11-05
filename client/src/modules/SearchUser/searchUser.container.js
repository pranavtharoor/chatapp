import { connect } from 'react-redux';
import { pick } from 'ramda';
import { action } from 'Src/utils';
import SearchUser from './SearchUser';

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(action('FETCH_SEARCH_USER_BEGIN', data)),
  startConversation: data =>
    dispatch(action('FETCH_START_CONVERSATION_BEGIN', data))
});

const mapStateToProps = state => ({
  ...pick(['users'], state.searchUser)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchUser);
