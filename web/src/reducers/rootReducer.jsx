import { combineReducers } from 'redux';
import getIndexInfoReducers from './getIndexInfo';

const rootReducer = combineReducers({
  getIndexInfoReducers,
});

export default rootReducer;
