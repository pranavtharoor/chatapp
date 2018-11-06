import React from 'react';
import LoginForm from 'Src/modules/LoginForm';
import SpeechBubble from 'Src/modules/SpeechBubble';
import './login.scss';

const Login = () => (
  <div className="login-page">
    <div className="details">
      <SpeechBubble>
        lasdasjdlasjd alskdj alskdj asldkj asldkjas dlkasj dlkasdj laksdj alskdj
        asdlkja sd
      </SpeechBubble>
    </div>
    <div className="form-container">
      <LoginForm />
    </div>
  </div>
);

export default Login;
