
export const GET_INDEX_INFO = 'GET_INDEX_INFO';
// action creator
export function getIndexInfo(id) {
  console.log('dispatch getIndexInfo');
  return {
    type: GET_INDEX_INFO,
    id,
  };
}
