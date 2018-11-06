import React from 'react';
import PropTypes from 'prop-types';
import './speechBubble.scss';

const SpeechBubble = props => (
  <div className="speech-bubble">{props.children}</div>
);

SpeechBubble.propTypes = {
  children: PropTypes.string.isRequired
};

export default SpeechBubble;
