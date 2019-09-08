import { createReducer } from "typesafe-actions";
import ActionEvent from "../../actions/ActionEvent";

export interface Category {
  name: string
  url: string
}

export interface Categories {
  categories: Array<Category>;
}

const init: Readonly<Categories> = {
  categories: []
};

const categories = createReducer(init)
  .handleAction(
    ActionEvent.RECEIVE_MENU_LIST, 
    (state, action) => {
      const categories: Categories = {
        categories: [
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
      return categories;
    }
  );

export default categories;