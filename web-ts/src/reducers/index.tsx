import { createStore, combineReducers, applyMiddleware } from "redux";
import userInfo from './UserInfo';
import menuList from './Menu';

const rootReducer = combineReducers({
  userInfo,
  menuList
});

export type AppStore = ReturnType<typeof rootReducer>;

export default function configStore() {
  const store = createStore(rootReducer);
  return store;
}