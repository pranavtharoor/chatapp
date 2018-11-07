import { connect } from 'react-redux';
import { pick } from 'ramda';
import Register from './Register';

const mapDispatchToProps = () => ({});

const mapStateToProps = state => ({
  ...pick(['registrationFilled'], state.common)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
