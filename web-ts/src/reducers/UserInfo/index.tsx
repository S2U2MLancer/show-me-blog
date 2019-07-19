import { createReducer } from 'typesafe-actions';
import ActionEvent from '../../actions/ActionEvent';
import { userInfo } from 'os';

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

const getUserInfo = createReducer(init).handleAction(
  ActionEvent.GET_USER_INFO, 
  (state, action) => {
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
    return Object.assign(init, state, userInfo);
  }
);

export default getUserInfo;