import React from 'react'
import { render,shallow } from 'enzyme'

import Template from '../../src/pages/template/template'

describe('test template Left Navigator', ()=> {
    const wrapper = shallow(<Template />)
    it('should be called, and right left page was returned', ()=> {
        expect(wrapper.text()).toEqual('Left Navigator')
    })
  })