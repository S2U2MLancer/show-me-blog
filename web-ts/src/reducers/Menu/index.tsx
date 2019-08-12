import { createReducer } from "typesafe-actions";
import ActionEvent from "../../actions/ActionEvent";

export interface Menu {
  name: string
  url: string
}

export interface MenuList {
  menuList: Array<Menu>;
}

const init: Readonly<MenuList> = {
  menuList: []
};

const menuList = createReducer(init)
  .handleAction(
    ActionEvent.RECEIVE_MENU_LIST, 
    (state, action) => {
      const menuList: MenuList = {
        menuList: [
          {
            name: 'menu1',
            url: '/menu1'
          },
          {
            name: 'menu2',
            url: '/menu2'
          }
        ]
      };
      return menuList;
    }
  );

export default menuList;