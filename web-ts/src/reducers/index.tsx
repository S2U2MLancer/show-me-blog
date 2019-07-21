import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import getUserInfo from './UserInfo';
import menu from './Menu';

const rootReducer = combineReducers({
  getUserInfo,
  menu
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  return store;
}