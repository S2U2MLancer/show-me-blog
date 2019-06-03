import { combineReducers } from 'redux';
import GET_INDEX_INFO from '../actions/getIndexInfo';

const initState = {
  content: 'Hello 2',
};

function indexInfo(state = initState, action) {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case GET_INDEX_INFO: {
      const newState = Object.assign({}, state, {
        content: 'Hello World React',
      });
      console.log('newState');
      console.log(newState);
      return newState;
    }
    default:
      return state;
  }
}

const getIndexInfoReducers = combineReducers({
  indexInfo,
});

export default getIndexInfoReducers;
