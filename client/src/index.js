import 'babel-polyfill';
import React from 'react';
import { SocketProvider } from 'socket.io-react';
import ReactDOM from 'react-dom';
import App from 'Src/core/App';
import { Provider } from 'react-redux';
import socket from 'Src/core/socketio';
import store from 'Src/store';

const Root = () => (
  <Provider store={store}>
    <SocketProvider socket={socket}>
      <App />
    </SocketProvider>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
