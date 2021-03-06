import { call, put, takeEvery, CallEffect } from 'redux-saga/effects';
import ActionEvent from '../../actions/ActionEvent';
import AppActionProducer from '../../actions';
import axios, {AxiosResponse} from 'axios';
import { UserInfo } from '../../reducers/UserInfo';

function* requestReceiveUserInfo() {
  const response: AxiosResponse<UserInfo> = yield call(
      () => axios.get<UserInfo>("/static/userInfo.json"));
  if (response && response.status === 200) {
    yield put(AppActionProducer.UserActions.storeUserInfo({
      id: 'id',
      userInfo: response.data
    }))
  }
}

function* receiveUserInfoWatcher() {
  yield takeEvery(ActionEvent.FETCH_USER_INFO, requestReceiveUserInfo);
}

export default receiveUserInfoWatcher;
