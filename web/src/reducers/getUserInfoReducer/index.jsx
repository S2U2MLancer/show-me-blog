/* eslint-disable no-unused-vars */
import { GET_USER_INFO_EVENT } from '../../actions/getUserInfoAction';
import UserInfoEntity from '../../entity/userInfo';

const init = new UserInfoEntity(
  '',
  '',
  '',
  [],
);


function getUserInfo(state, action) {
  if (action.type !== GET_USER_INFO_EVENT) {
    return Object.assign(init, state);
  }

  const userInfo = new UserInfoEntity(
    '/static/avatar.png',
    's2u2m',
    '',
    [
      {
        name: 'github',
        url: 'https://github.com/S2U2MLancer',
      },
      {
        name: 'envelope',
        url: 'share2u2m@126.com',
      },
    ],
  );
  return Object.assign(init, state, userInfo);
}

export default getUserInfo;
