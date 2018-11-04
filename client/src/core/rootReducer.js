import { combineReducers } from 'redux';
import appReducer from './App/app.reducer';
import { snackbarReducer } from 'Src/modules/Snackbar';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  form: formReducer,
  common: appReducer,
  snackbar: snackbarReducer
});
