import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { request, action } from 'Src/utils';

function* login({ payload }) {
  if (!payload.data.email || !payload.data.password)
    yield put(
      action('SET_SNACKBAR', { type: 'danger', message: 'Fill all fields' })
    );
  else {
    const data = yield call(request, '/login', payload.data);
    if (data.success) {
      yield put(action('SET_SNACKBAR', { type: 'success', message: data.msg }));
      yield put(action('SET_LOGGED_IN', true));
      yield payload.push('/');
    } else
      yield put(action('SET_SNACKBAR', { type: 'danger', message: data.msg }));
  }
  yield delay(3000);
  yield put(action('CLEAR_SNACKBAR'));
}

function* loginFormSaga() {
  yield takeLatest('FETCH_LOGIN_BEGIN', login);
}

export default loginFormSaga;
