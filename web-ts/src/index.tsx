import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './reducers';
import App from './pages/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const store = configStore();
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
