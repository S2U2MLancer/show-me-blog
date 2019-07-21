import { createReducer } from "typesafe-actions";
import { combineReducers } from "redux";
import ActionEvent from "../../actions/ActionEvent";
import putMenuList from './PutMenuList'; 

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

const getMenuList = createReducer(init)
  .handleAction(
    ActionEvent.GET_MENU_LIST, 
    (state, action) => {
      const menuList: MenuList = {
        menuList: [
          {
            name: 'menu1',
            url: '/menu1'
          }
        ]
      };
      return Object.assign(init, state, menuList);
    }
  );

const menuReducers = combineReducers({
  getMenuList,
  putMenuList
});

export default menuReducers;