import { call, put, takeLatest } from 'redux-saga/effects';
import { request, action } from 'Src/utils';

function* initChat() {
  const data = yield call(request, '/init');
  if (data.success) yield put(action('FETCH_INIT_CHAT_SUCCESS', data.data));
}

function* chatSaga() {
  yield takeLatest('FETCH_INIT_CHAT_BEGIN', initChat);
}

export default chatSaga;
