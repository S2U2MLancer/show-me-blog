import { call, put, takeEvery, CallEffect } from 'redux-saga/effects';
import ActionEvent from '../../actions/ActionEvent';
import AppActionProducer from '../../actions';
import { AxiosResponse } from 'axios';
import { UserInfo } from '../../reducers/UserInfo';
import { getUserInfo } from '../../api/UserInfo';

function* requestReceiveUserInfo() {
  const userInfo: UserInfo = yield call(getUserInfo);
  yield put(AppActionProducer.UserActions.storeUserInfo({
    id: 'id',
    userInfo: userInfo
  }))
}

function* receiveUserInfoWatcher() {
  yield takeEvery(ActionEvent.FETCH_USER_INFO, requestReceiveUserInfo);
}

export default receiveUserInfoWatcher;
