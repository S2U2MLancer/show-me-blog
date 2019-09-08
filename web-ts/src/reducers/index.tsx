import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import userInfo from './UserInfo';
import menuList from './Category';
import AppSaga from '../sagas';

const rootReducer = combineReducers({
  userInfo,
  menuList
});

export type AppStore = ReturnType<typeof rootReducer>;

export default function configStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(AppSaga);
  return store;
}