import { createAction } from "typesafe-actions";
import { Menu } from "../../reducers/Menu";
import ActionEvent from "../ActionEvent";

export interface PutMenuListParam {
  menuList: Array<Menu>
}

const putMenuListAction = createAction(
  ActionEvent.PUT_MENU_LIST,
  action => {
    return (param: PutMenuListParam) => action(param);
  }
);

export default putMenuListAction;