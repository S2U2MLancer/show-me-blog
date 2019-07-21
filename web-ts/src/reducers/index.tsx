import { createStore, combineReducers, applyMiddleware } from "redux";
import getUserInfo from './UserInfo';
import getMenuList from './Menu';

const rootReducer = combineReducers({
  getUserInfo,
  getMenuList
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configStore() {
  const store = createStore(rootReducer);
  return store;
}