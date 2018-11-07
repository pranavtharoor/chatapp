import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import './message.scss';

const transitionStyles = {
  entering: { opacity: 0, transform: 'translateY(10px)' },
  entered: { opacity: 1, transform: 'translateY(0px)' }
};

const Message = props => (
  <div
    style={{
      justifyContent: props.type === 'left' ? 'flex-start' : 'flex-end'
    }}
    className="message"
  >
    <Transition in={true} timeout={100} appear={true}>
      {state => (
        <div
          style={{ ...transitionStyles[state] }}
          className={`box ${props.type}`}
        >
          {props.message}
        </div>
      )}
    </Transition>
  </div>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Message;
