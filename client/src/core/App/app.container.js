import { connect } from 'react-redux';
import { pick } from 'ramda';
import App from './App';

const mapDispatchToProps = () => ({});

const mapStateToProps = state => ({
  ...pick(['loggedIn', 'loading'], state.common)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
