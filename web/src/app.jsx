import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import Body from './components/body';

const store = createStore(rootReducer);

const App = () => (
  <div className="container">
    <Body />
  </div>
);


const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  app,
);

export default App;
