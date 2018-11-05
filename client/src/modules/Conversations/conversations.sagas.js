import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { request, action } from 'Src/utils';

function* fetchConversations() {
  const data = yield call(request, '/conversations');
  if (data.success) {
    yield put(action('FETCH_CONVERSATIONS_SUCCESS', data.data));
  } else
    yield put(action('SET_SNACKBAR', { type: 'danger', message: data.msg }));
  yield delay(3000);
  yield put(action('CLEAR_SNACKBAR'));
}

function* startConversation({ payload }) {
  const data = yield call(request, '/startConversation', { userId: payload });
  if (data.success) {
    yield put(action('FETCH_START_CONVERSATION_SUCCESS', data.data));
    yield put(action('FETCH_CONVERSATIONS_BEGIN'));
  } else
    yield put(action('SET_SNACKBAR', { type: 'danger', message: data.msg }));
  yield delay(3000);
  yield put(action('CLEAR_SNACKBAR'));
}

function* conversationsSaga() {
  yield takeLatest('FETCH_CONVERSATIONS_BEGIN', fetchConversations);
  yield takeLatest('FETCH_START_CONVERSATION_BEGIN', startConversation);
}

export default conversationsSaga;
