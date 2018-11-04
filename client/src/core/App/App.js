import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Favicon from 'react-favicon';
import PropTypes from 'prop-types';
import './app.scss';
import routes from 'Src/routes';
import Navbar from 'Src/modules/Navbar';
import Snackbar from 'Src/modules/Snackbar';
import Loader from 'Src/modules/Loader';

const App = props => (
  <div>
    {props.loading && <Loader />}
    <Favicon url="https://img.icons8.com/small/1600/filled-chat.png" />
    <Router>
      <div className={`app-container`}>
        <Navbar />
        {!props.loggedIn && <div className="hr" />}
        <Switch>
          {routes.map(route => (
            <Route
              exact
              key={route.pathname}
              path={route.pathname}
              component={route.component}
            />
          ))}
        </Switch>
        <Snackbar />
      </div>
    </Router>
  </div>
);

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired
};

export default App;
