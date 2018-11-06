import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

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
        <button>SEARCH</button>
      </form>
    </div>
    <div>
      {props.users.map((user, i) => (
        <div key={`user_${i}`}>
          {user.name} {user.email}
          <button onClick={() => props.startConversation(user.id)}>Chat</button>
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
