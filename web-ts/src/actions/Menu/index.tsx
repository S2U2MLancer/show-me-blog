import { createAction } from "typesafe-actions";
import ActionEvent from "../ActionEvent";
import putMenuListAction from './PutMenuList';

export interface GetMenuListActionParam {
}

export const getMenuListAction = createAction(
  ActionEvent.GET_MENU_LIST,
  action => {
    const param: GetMenuListActionParam = {};
    return () => action(param);
  }
);

export default {
  getMenuListAction, 
  putMenuListAction
}
