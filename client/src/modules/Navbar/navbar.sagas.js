import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { request, action } from 'Src/utils';

function* logout() {
  const data = yield call(request, '/logout');
  if (data.success) {
    yield put(action('SET_SNACKBAR', { type: 'success', message: data.msg }));
    yield put(action('SET_LOGGED_IN', false));
  } else
    yield put(action('SET_SNACKBAR', { type: 'danger', message: data.msg }));
  yield delay(3000);
  yield put(action('CLEAR_SNACKBAR'));
}

function* navbarSaga() {
  yield takeLatest('FETCH_LOGOUT_BEGIN', logout);
}

export default navbarSaga;
