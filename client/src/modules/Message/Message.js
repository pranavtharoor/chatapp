import React from 'react';
import PropTypes from 'prop-types';
import './message.scss';

const Message = props => (
  <div
    style={{
      justifyContent: props.type === 'left' ? 'flex-start' : 'flex-end'
    }}
    className="message"
  >
    <div className={`box ${props.type}`}>{props.message}</div>
  </div>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Message;
