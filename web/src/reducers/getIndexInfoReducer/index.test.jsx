import getIndexInfoReducer from '.';
import { GET_INDEX_INFO } from '../../actions/getIndexInfoAction';

describe('get index info reducer', () => {
  it('return init', () => {
    expect(getIndexInfoReducer(undefined, {})).toEqual({
      content: 'Hello',
    });
  });

  it('return index into', () => {
    expect(getIndexInfoReducer({}, {
      type: GET_INDEX_INFO,
      id: '123',
    })).toEqual({
      content: 'Hello World React',
    });
  });
});
