import { createReducer } from "typesafe-actions";
import { CategoryEvent } from '../../actions/Category'

export interface Category {
  name: string
  url: string
}

const category = createReducer([])
  .handleAction(
    CategoryEvent.SAVE_CATEGORIES, 
    (_, action) => {
      return [...action.playload.categories];
    })
  .handleAction(
    CategoryEvent.GET_CATEGORIES, 
    (state, _) => {
      return [...state]
    }
  );

export default category;