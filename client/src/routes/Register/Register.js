import React from 'react';
import RegisterForm from 'Src/modules/RegisterForm';
import SpeechBubble from 'Src/modules/SpeechBubble';
import PropTypes from 'prop-types';
import './register.scss';

const Register = props => (
  <div className="register-page">
    <div className="details">
      {props.registrationFilled ? (
        <SpeechBubble>
          You will find an email in your inbox. Follow the link provided in it
          to complete your registration. In case you don&#39;t find it check
          your socials and promotions folders.
        </SpeechBubble>
      ) : (
        <SpeechBubble>
          Tell us your name and provide a valid email to start your registration
          process. A verification email will be sent to you.
        </SpeechBubble>
      )}
    </div>
    <div className="form-container">
      <RegisterForm />
    </div>
  </div>
);

Register.propTypes = {
  registrationFilled: PropTypes.bool.isRequired
};

export default Register;
