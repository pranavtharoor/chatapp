import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SetPasswordForm from 'Src/modules/SetPasswordForm';
import SpeechBubble from 'Src/modules/SpeechBubble';
import './setPassword.scss';

class SetPassword extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  state = {
    token: ''
  };

  componentDidMount() {
    const token = new URL(window.location.href).searchParams.get('token');
    if (token) this.setState({ token });
    else this.props.history.push('/login');
  }

  render() {
    return (
      <div className="set-password-page">
        <div className="details">
          <SpeechBubble>
            Complete your registration by choosing a secure password.
          </SpeechBubble>
        </div>
        <div className="form-container">
          <SetPasswordForm token={this.state.token} />
        </div>
      </div>
    );
  }
}

export default SetPassword;
