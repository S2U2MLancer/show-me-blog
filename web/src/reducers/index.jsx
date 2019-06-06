import { GET_INDEX_INFO } from '../actions/getIndexInfo';

const initState = {
  content: 'Hello',
};

function index(state = initState, action) {
  switch (action.type) {
    case GET_INDEX_INFO: {
      return Object.assign({}, state, {
        content: 'Hello World React',
      });
    }
    default:
      return state;
  }
}

export default index;
