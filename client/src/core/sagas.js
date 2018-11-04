import { all, put } from 'redux-saga/effects';
import { navbarSaga } from 'Src/modules/Navbar';
import { loginFormSaga } from 'Src/modules/LoginForm';
import { registerFormSaga } from 'Src/modules/RegisterForm';
import { forgotPasswordFormSaga } from 'Src/modules/ForgotPasswordForm';
import { setPasswordFormSaga } from 'Src/modules/SetPasswordForm';
import { action } from 'Src/utils';

function* init() {
  process.env.NODE_ENV === 'development' &&
    console.log('🍪🍪🍪 cookies:', document.cookie || 'none');
  if (document.cookie.includes('connect.sid'))
    yield put(action('SET_LOGGED_IN', true));
  yield put(action('SET_LOADING', false));
}

export function* rootSaga() {
  yield all([
    init(),
    navbarSaga(),
    loginFormSaga(),
    registerFormSaga(),
    forgotPasswordFormSaga(),
    setPasswordFormSaga()
  ]);
}

export default rootSaga;
