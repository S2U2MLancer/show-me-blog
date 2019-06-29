import React from 'react'
import { createStore } from 'redux'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import rootReducer from '../../src/reducers/rootReducer'
import Body from "../../src/pages/index/index"

let wrapper

beforeEach( () => {
  const store = createStore(rootReducer)
  wrapper = mount (
    <Provider store={store}>
    <Body />
    </Provider>
  )
})

describe('test index export from body', ()=> {
    it('Check Body', ()=> {
      expect(wrapper.find(Body).text()).toContain('Hello World React')
  })
})


