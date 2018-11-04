import { connect } from 'react-redux';
import { pick } from 'ramda';
import { action } from 'Src/utils';
import Navbar from './Navbar';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(action('FETCH_LOGOUT_BEGIN'))
});

const mapStateToProps = state => ({
  ...pick(['loggedIn'], state.common),
  ...pick(['name'], state.common.userData)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(Navbar);
