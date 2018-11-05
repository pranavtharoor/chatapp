import { combineReducers } from 'redux';
import appReducer from './App/app.reducer';
import { snackbarReducer } from 'Src/modules/Snackbar';
import { conversationsReducer } from 'Src/modules/Conversations';
import { searchUserReducer } from 'Src/modules/SearchUser';
import { chatBoxReducer } from 'Src/modules/ChatBox';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  form: formReducer,
  common: appReducer,
  conversations: conversationsReducer,
  searchUser: searchUserReducer,
  snackbar: snackbarReducer,
  chat: chatBoxReducer
});
