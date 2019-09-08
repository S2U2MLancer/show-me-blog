import React from 'react'
import { shallow } from 'enzyme'

import CategoriesElement from './index'
import { Category,Categories } from '../../reducers/Category';

describe('test menuList',() => {
  it('menuList',() => {
    const testMenu: Category = {
      name:'testUrlName',
      url: 'https://github.com/S2U2MLancer/show-me-blog'
    };
    const testMenuList: Categories = {
      categories: [
        testMenu
      ]
    };
    const testMenuListElement = shallow(<CategoriesElement categories={testMenuList.categories}/>)
    expect(testMenuListElement.text()).toBe('testUrlName')
  })
})