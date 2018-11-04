import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { request, action } from 'Src/utils';
import { reset } from 'redux-form';

function* forgotPasswordSubmit({ payload }) {
  if (
    !payload.email ||
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(payload.email)
  ) {
    yield put(
      action('SET_SNACKBAR', { type: 'danger', message: 'Invalid email' })
    );
    yield delay(3000);
    yield put(action('CLEAR_SNACKBAR'));
    return;
  }
  const data = yield call(request, '/forgotPassword', payload);
  if (data.success) {
    yield put(action('SET_SNACKBAR', { type: 'success', message: data.msg }));
    yield put(action('FETCH_FORGOT_PASSWORD_SUCCESS'));
    yield put(reset('forgotPassword'));
  } else
    yield put(action('SET_SNACKBAR', { type: 'danger', message: data.msg }));
  yield delay(3000);
  yield put(action('CLEAR_SNACKBAR'));
}

function* forgotPasswordFormSaga() {
  yield takeLatest('FETCH_FORGOT_PASSWORD_BEGIN', forgotPasswordSubmit);
}

export default forgotPasswordFormSaga;
