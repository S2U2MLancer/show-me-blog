import { createAction } from "typesafe-actions";
import ActionEvent from "../ActionEvent";

export interface GetUserInfoAction { 
  id: string
}

const getUserInfo = createAction(
  ActionEvent.GET_USER_INFO, 
  action => {
    return (id: string) => {
      const actionParam: GetUserInfoAction = {
        id
      };
      return action(actionParam);
    };
  }
);

export default getUserInfo;
