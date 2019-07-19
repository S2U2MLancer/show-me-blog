import { createStore, combineReducers, applyMiddleware } from "redux";
import getUserInfo from './UserInfo';

const rootReducer = combineReducers({
  getUserInfo
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configStore() {
  const store = createStore(rootReducer);
  return store;
}