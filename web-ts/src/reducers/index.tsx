import { combineReducers } from "redux";

import userInfo from './UserInfo';
import category from './Category';

const AppReducers = combineReducers({
  userInfo,
  category
});
export default AppReducers;
