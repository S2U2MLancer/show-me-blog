import { put, takeEvery } from 'redux-saga/effects';
import ActionEvent from '../../actions/ActionEvent';
import AppActionProducer from '../../actions';

function* requestReceiveUserInfo() {
  const userInfo = {
    avatar: process.env.PUBLIC_URL + '/avatar.png',
    username: 's2u2m',
    motto: '',
    contacts: [
      {
        name: 'github',
        url: 'https://github.com/S2U2MLancer',
      },
      {
        name: 'envelope',
        url: 'share2u2m@126.com',
      }
    ]
  };
  yield put(AppActionProducer.UserActions.storeUserInfo({
    id: 'id',
    userInfo
  }))
}

function* receiveUserInfoWatcher() {
  yield takeEvery(ActionEvent.FETCH_USER_INFO, requestReceiveUserInfo);
}

export default receiveUserInfoWatcher;
