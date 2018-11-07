import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import './speechBubble.scss';

const transitionStyles = {
  entering: { opacity: 0, transform: 'translateY(40px)' },
  entered: { opacity: 1, transform: 'none' }
};

const SpeechBubble = props => (
  <Transition in={true} timeout={100} appear={true}>
    {state => (
      <div style={{ ...transitionStyles[state] }} className="speech-bubble">
        {props.children}
      </div>
    )}
  </Transition>
);

SpeechBubble.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired
};

export default SpeechBubble;
