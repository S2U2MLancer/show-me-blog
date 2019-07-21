import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import ActionEvent from '../../actions/ActionEvent';
import { MenuList } from '../../reducers/Menu';

function* getMenuListSaga() {
  const menuList: MenuList = {
    menuList: [
      {
        name: 'menu1',
        url: '/menu1'
      }
    ]
  };
  
}

function* getMenuListWatcher() {
  yield takeEvery(ActionEvent.GET_MENU_LIST, getMenuListSaga);
}