import { call, put, takeLatest } from 'redux-saga/effects';
import { request, action } from 'Src/utils';

function* searchUser({ payload }) {
  if (!payload.search) {
    yield put(action('FETCH_SEARCH_USER_SUCCESS', []));
    return;
  }
  const data = yield call(request, '/searchUser?search=' + payload.search);
  if (data.success) {
    yield put(action('SET_SNACKBAR', { type: 'success', message: data.msg }));
    yield put(action('FETCH_SEARCH_USER_SUCCESS', data.data));
  }
}

function* searchUserSaga() {
  yield takeLatest('FETCH_SEARCH_USER_BEGIN', searchUser);
}

export default searchUserSaga;
