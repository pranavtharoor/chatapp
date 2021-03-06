import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import Captcha from 'Src/modules/Captcha';
import './registerForm.scss';

const registerValidate = values => {
  const errors = {};
  if (!values.email) errors.email = 'Required';
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email = 'Invalid email address';
  if (!values.name) errors.name = 'Required';
  else if (values.name.length > 30)
    errors.name = 'Must be less than 30 characters long';
  return errors;
};

let RegisterField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="field">
    <input {...input} placeholder={label} type={type} />
    <div className="error">{touched && (error && error)}</div>
  </div>
);

RegisterField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string
  })
};

let RegisterForm = props => (
  <div className="register-form">
    <div className="form">
      <h1>Register</h1>
      <form
        onSubmit={props.handleSubmit(data =>
          props.onRegister({ data, push: props.history.push })
        )}
      >
        <Field name="name" component={RegisterField} type="text" label="Name" />
        <Field
          name="email"
          component={RegisterField}
          type="email"
          label="Email"
        />
        {/* <Field name="captcharesponse" component={Captcha} /> */}
        <button>REGISTER</button>
      </form>
    </div>
  </div>
);

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

RegisterForm = reduxForm({
  form: 'register',
  validate: registerValidate
})(RegisterForm);

export default withRouter(RegisterForm);
