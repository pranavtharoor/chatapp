import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { request, action } from 'Src/utils';

function* register({ payload }) {
  // if (!payload.data.captcharesponse) return;
  const data = yield call(request, '/register', payload.data);
  if (data.success) {
    yield put(action('SET_SNACKBAR', { type: 'success', message: data.msg }));
    yield payload.push('/login');
  } else
    yield put(action('SET_SNACKBAR', { type: 'danger', message: data.msg }));
  yield delay(3000);
  yield put(action('CLEAR_SNACKBAR'));
}

function* registerFormSaga() {
  yield takeLatest('FETCH_REGISTER_BEGIN', register);
}

export default registerFormSaga;
