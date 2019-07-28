import React from 'react'
import { shallow } from 'enzyme'

import MenuListElement from './index'
import { Menu,MenuList } from '../../reducers/Menu';

describe('test menuList',() => {
  it('menuList',() => {
    const testMenu: Menu = {
      name:'testUrlName',
      url: 'https://github.com/S2U2MLancer/show-me-blog'
    };
    const testMenuList: MenuList = {
      menuList: [
        testMenu
      ]
    };
    const testMenuListElement = shallow(<MenuListElement menuList={testMenuList.menuList}/>)
    expect(testMenuListElement.text()).toBe('testUrlName')
  })
})