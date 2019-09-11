import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import AppReducers from '../reducers'
import AppSaga from '../sagas';

export function configStore() {
  const sagaMiddleware = createSagaMiddleware();
  const sagaStore = createStore(AppReducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(AppSaga);
  return sagaStore;
}

const store = configStore();
export default store;
