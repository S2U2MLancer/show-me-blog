
export const GET_INDEX_INFO = 'GET_INDEX_INFO';
// action creator
export function getIndexInfo(id) {
  return {
    type: GET_INDEX_INFO,
    id,
  };
}
