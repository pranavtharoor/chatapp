import React from 'react';
import RegisterForm from 'Src/modules/RegisterForm';
import SpeechBubble from 'Src/modules/SpeechBubble';
import './register.scss';

const Register = () => (
  <div className="register-page">
    <div className="details">
      <SpeechBubble>
        Tell us your name and provide a valid email to start your registration
        process. A verification email will be sent to you.
      </SpeechBubble>
    </div>
    <div className="form-container">
      <RegisterForm />
    </div>
  </div>
);

export default Register;
