import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from '../../reducers';
import { mount, shallow,render} from 'enzyme';
import * as serviceWorker from '../../../src/serviceWorker';

import App from './index'

describe('App test',() => {
  it('right page test', () =>{
    let wrapper
    const store = configStore();
    wrapper = render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(wrapper.find('.card-title')).toContain('s2u2m');
    expect(wrapper)
  })
})