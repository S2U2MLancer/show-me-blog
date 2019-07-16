import { combineReducers } from 'redux';
import getIndexInfoReducer from './getIndexInfoReducer';
import getUserInfo from './getUserInfoReducer';

const reducers = combineReducers({
  getIndexInfoReducer,
  getUserInfo,
});

export default reducers;
