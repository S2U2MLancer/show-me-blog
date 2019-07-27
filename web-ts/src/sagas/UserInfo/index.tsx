import { call, put, takeEvery, CallEffect } from 'redux-saga/effects';
import ActionEvent from '../../actions/ActionEvent';
import AppActionProducer from '../../actions';
import axios from 'axios';
import { UserInfo } from '../../reducers/UserInfo';

function* requestReceiveUserInfo() {
  const response = yield call(() => axios.get("/static/userInfo.json"));
  if (response && response.status === 200) {
    const userInfo: UserInfo = response.data;
    yield put(AppActionProducer.UserActions.storeUserInfo({
      id: 'id',
      userInfo
    }))
  }
}

function* receiveUserInfoWatcher() {
  yield takeEvery(ActionEvent.FETCH_USER_INFO, requestReceiveUserInfo);
}

export default receiveUserInfoWatcher;
