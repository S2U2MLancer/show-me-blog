import { createAction } from "typesafe-actions";
import ActionEvent from "../ActionEvent";

export interface GetMenuListActionParam {
}

export const getMenuListAction = createAction(
  ActionEvent.GET_MENU_LIST,
  action => {
    const param: GetMenuListActionParam = {};
    return () => action(param);
  }
);
