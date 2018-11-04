import { connect } from 'react-redux';
import { action } from 'Src/utils';
import LoginForm from './LoginForm';

const mapDispatchToProps = dispatch => ({
  onLogin: data => dispatch(action('FETCH_LOGIN_BEGIN', data))
});

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
