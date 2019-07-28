import React from 'react'
import { shallow, mount, render } from 'enzyme'

import UserInfoElement from './index'
import { UserInfo, Contact } from '../../reducers/UserInfo';
import { userInfo } from 'os';

describe('left userinfo test', () => {
  it('userinfo', () => {
    const user: UserInfo = {
      avatar: '/static/avatar.png',
      username: 'testname',
      motto: '',
      contacts: [
        {
          "name": "github",
          "url": "https://github.com/S2U2MLancer"
        },
        {
          "name": "envelope",
          "url": "share2u2m@126.com"
        }
      ]
    }
    const testLeftElement = shallow((<UserInfoElement userInfo={user}/>));
    expect(testLeftElement.text()).toBe('testname');
    expect(testLeftElement.find('.card-link')).toBeNull;
  })
})