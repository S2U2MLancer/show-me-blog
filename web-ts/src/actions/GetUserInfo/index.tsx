import { createAction, action } from "typesafe-actions";
import ActionEvent from "../ActionEvent";

export interface GetUserInfoAction { 
  id: string
}

const getUserInfoAction = createAction(
  ActionEvent.GET_USER_INFO, 
  action => {
    return (id: string) => action({ id });
  }
);

export default getUserInfoAction;
