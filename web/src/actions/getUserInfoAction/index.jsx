export const GET_USER_INFO_EVENT = 'GET_USER_INFO';

export function getUserInfoAction(id) {
  return {
    type: GET_USER_INFO_EVENT,
    id,
  };
}
