import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';
import './loginForm.scss';

let LoginForm = props => (
  <div className="login-form">
    <div className="form">
      <h1>Login</h1>
      <form
        onSubmit={props.handleSubmit(data =>
          props.onLogin({ data, push: props.history.push })
        )}
      >
        <Field
          autoComplete="off"
          autoCapitalize="off"
          name="email"
          component="input"
          type="text"
          placeholder="Email"
        />
        <br />
        <Field
          name="password"
          component="input"
          type="password"
          placeholder="Password"
        />
        <br />
        <button>LOGIN</button>
        <br />
        <br />
        <NavLink exact={true} to="/forgotpassword" activeClassName="active">
          {/* <div className="forgot">Forgot Password?</div> */}
        </NavLink>
      </form>
    </div>
  </div>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default withRouter(LoginForm);
