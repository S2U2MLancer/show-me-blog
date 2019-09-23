import { all, fork } from 'redux-saga/effects';
import receiveUserInfoWatcher from './UserInfo';
import loadCateoriesWatcher from './Category';

const AppSaga = function* appSaga() {
  yield all([
    fork(receiveUserInfoWatcher),
    fork(loadCateoriesWatcher)
  ])
}

export default AppSaga;