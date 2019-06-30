import { getIndexInfoAction } from '.';

describe('get Index Info', () => {
  it('should be called, and right action was returned', () => {
    const id = 'test';
    const action = getIndexInfoAction(id);

    expect(action).toEqual({
      type: 'GET_INDEX_INFO',
      id,
    });
  });
});
