import { GET_INDEX_INFO } from '../../actions/getIndexInfoAction';

const initState = {
  content: 'Hello',
};

function getIndexInfoReducer(state, action) {
  if (action.type !== GET_INDEX_INFO) {
    return Object.assign({}, initState);
  }

  return Object.assign({}, state, {
    content: 'Hello World React',
  });
}

export default getIndexInfoReducer;
