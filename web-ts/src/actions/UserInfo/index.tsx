import { createAction } from "typesafe-actions";
import ActionEvent from "../ActionEvent";
import { UserInfo } from '../../reducers/UserInfo';

export interface StoreUserInfoAction { 
  id: string,
  userInfo: UserInfo
}

const storeUserInfo = createAction(
  ActionEvent.STORE_USER_INFO, 
  action => {
    return (actionParam: StoreUserInfoAction) => action(actionParam);
  }
);

const fetchUserInfo = createAction(
  ActionEvent.FETCH_USER_INFO,
  action => {
    return () => action();
  }
)

const UserActions = {
  fetchUserInfo,
  storeUserInfo,
}

export default UserActions;
