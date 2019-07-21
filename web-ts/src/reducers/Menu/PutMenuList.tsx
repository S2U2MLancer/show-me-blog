import { createReducer } from "typesafe-actions";
import ActionEvent from "../../actions/ActionEvent";
import { MenuList } from '.';
import { PutMenuListParam } from "../../actions/Menu/PutMenuList";

const init: Readonly<MenuList> = {
  menuList: []
};

const putMenuList = createReducer(init)
  .handleAction(
    ActionEvent.PUT_MENU_LIST,
    (state, action: PutMenuListParam) => {
      return Object.assign(init, state, action.menuList);
    }
  );

export default putMenuList;