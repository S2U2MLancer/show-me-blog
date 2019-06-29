import * as testIndex from "../../src/actions/getIndexInfo"

describe('get Index Info', ()=> {
    it('should be called, and right action was returned', ()=> {
      const id = "test"
      const action = testIndex.getIndexInfo(id)
  
      expect(action).toEqual({
        type: 'GET_INDEX_INFO',
        id,
      })
    })
  })