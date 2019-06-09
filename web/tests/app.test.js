import React from 'react'
import { createStore } from 'redux'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import App from '../src/app'
import rootReducer from '../src/reducers/rootReducer'
import Body from '../src/components/body';

let store
let wrapper

beforeEach( () => {
  const store = createStore(rootReducer)
  wrapper = mount (
    <Provider store={store}>
    <App />
    </Provider>
  )
})

describe('test suite', ()=> {
    it('Check content', ()=> {
      expect(wrapper.find(App).text()).toContain('Hello World React')
  });
    it('Check Body', ()=> {
    expect(wrapper.find(Body).text()).toContain('Hello World React')
  })
})
