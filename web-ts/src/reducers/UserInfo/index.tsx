import { createReducer } from 'typesafe-actions';
import ActionEvent from '../../actions/ActionEvent';
import { StoreUserInfoAction } from '../../actions/UserInfo';

export interface Contact {
  name: string,
  url: string
}

export interface UserInfo {
  avatar: string,
  username: string,
  motto: string,
  contacts: Array<Contact>
}

const init: Readonly<UserInfo> = {
  avatar: '/static/avatar.png',
  username: 's2u2m',
  motto: '',
  contacts: []
};

const userInfo = createReducer(init, {
  [ActionEvent.STORE_USER_INFO]: (state, action) => {
    return Object.assign(init, state, action.payload.userInfo);
  },
});


export default userInfo;