import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import User from 'Src/modules/User';
import './searchUser.scss';

let SearchUser = props => (
  <div className="search-user">
    <div className="form">
      <form onSubmit={props.handleSubmit}>
        <Field
          name="search"
          component="input"
          autoComplete="off"
          type="text"
          placeholder="SEARCH"
        />
      </form>
    </div>
    <div>
      {props.users.map((user, i) => (
        <div key={`user_${i}`} onClick={() => props.startConversation(user.id)}>
          <User name={user.name} email={user.email} />
        </div>
      ))}
    </div>
  </div>
);

SearchUser.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  startConversation: PropTypes.func.isRequired
};

SearchUser = reduxForm({
  form: 'searchUser'
})(SearchUser);

export default withRouter(SearchUser);
