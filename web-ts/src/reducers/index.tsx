import { createStore, combineReducers, applyMiddleware } from "redux";

const rootReducer = combineReducers({});

export default function configStore() {
  const store = createStore(rootReducer);
  return store;
}