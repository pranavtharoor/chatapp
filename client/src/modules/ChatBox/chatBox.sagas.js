import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { request, action } from 'Src/utils';

function* fetchChat({ payload }) {
  const data = yield call(request, '/messages?conversationId=' + payload.id);
  if (data.success) {
    yield put(action('FETCH_CHAT_SUCCESS', data.data));
  } else
    yield put(action('SET_SNACKBAR', { type: 'danger', message: data.msg }));
  yield delay(3000);
  yield put(action('CLEAR_SNACKBAR'));
}

function* chatBoxSaga() {
  yield takeLatest('OPEN_CHAT', fetchChat);
}

export default chatBoxSaga;
