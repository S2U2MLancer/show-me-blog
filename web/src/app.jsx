import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import Routers from './routers';

const store = createStore(rootReducer);

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  app,
);

export default Routers;
