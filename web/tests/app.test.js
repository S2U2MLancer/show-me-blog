import React from 'react'
import { createStore } from 'redux'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import Routers from '../src/app'
import rootReducer from '../src/reducers/rootReducer'
import Body from '../src/components/body';

let store
let wrapper

beforeEach( () => {
  const store = createStore(rootReducer)
  wrapper = mount (
    <Provider store={store}>
    <Routers />
    </Provider>
  )
})

describe('test suite', ()=> {
    it('Check content', ()=> {
      expect(wrapper.find(Routers).text()).toContain('Left Navigator')
  });
    it('Check Body', ()=> {
    expect(wrapper.find(Body).text()).toContain('Hello World React')
  })
})
