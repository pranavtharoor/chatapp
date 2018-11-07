import store from 'Src/store';
import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { request, action } from 'Src/utils';

function* fetchChat({ payload }) {
  const data = yield call(request, '/messages?conversationId=' + payload.id);
  if (data.success) {
    const storeState = yield store.getState();
    const index = yield storeState.conversations.conversations.findIndex(
      conversation => conversation.id === payload.id
    );
    const conv = [...storeState.conversations.conversations];
    if (index !== -1) {
      conv[index].unread = false;
      yield put(action('FETCH_CONVERSATIONS_SUCCESS', conv));
    }
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
