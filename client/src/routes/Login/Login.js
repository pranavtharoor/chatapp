import React from 'react';
import LoginForm from 'Src/modules/LoginForm';
import SpeechBubble from 'Src/modules/SpeechBubble';
import './login.scss';

const Login = () => (
  <div className="login-page">
    <div className="details">
      <SpeechBubble>
        Hey!<br />Login and let the chatting begin!<br />
        <br />
        First time here? No worries. Create an account by clicking on the
        register button in the top right corner.
      </SpeechBubble>
    </div>
    <div className="form-container">
      <LoginForm />
    </div>
  </div>
);

export default Login;
