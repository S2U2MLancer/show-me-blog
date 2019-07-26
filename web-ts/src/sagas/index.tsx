import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import receiveUserInfoWatcher from './UserInfo';

const AppSaga = function* appSaga() {
  yield all([
    fork(receiveUserInfoWatcher),
  ])
}

export default AppSaga;