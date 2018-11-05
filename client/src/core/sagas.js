import { all, put, call } from 'redux-saga/effects';
import { navbarSaga } from 'Src/modules/Navbar';
import { loginFormSaga } from 'Src/modules/LoginForm';
import { registerFormSaga } from 'Src/modules/RegisterForm';
import { forgotPasswordFormSaga } from 'Src/modules/ForgotPasswordForm';
import { setPasswordFormSaga } from 'Src/modules/SetPasswordForm';
import { conversationsSaga } from 'Src/modules/Conversations';
import { chatBoxSaga } from 'Src/modules/ChatBox';
import { searchUserSaga } from 'Src/modules/SearchUser';
import { request, action } from 'Src/utils';

function* init() {
  process.env.NODE_ENV === 'development' &&
    console.log('🍪🍪🍪 cookies:', document.cookie || 'none');
  if (document.cookie.includes('connect.sid')) {
    yield put(action('SET_LOGGED_IN', true));
    const data = yield call(request, '/init');
    if (data.success)
      yield put(action('FETCH_INIT_SUCCESS', data.data.userDetails));
  }
  yield put(action('SET_LOADING', false));
}

export function* rootSaga() {
  yield all([
    init(),
    navbarSaga(),
    loginFormSaga(),
    registerFormSaga(),
    forgotPasswordFormSaga(),
    setPasswordFormSaga(),
    conversationsSaga(),
    searchUserSaga(),
    chatBoxSaga()
  ]);
}

export default rootSaga;
