import { createAction } from "typesafe-actions";
import { Category } from "../../reducers/Category";

export enum CategoryEvent {
  LOAD_CATEGORIES = 'LOAD_CATEGORIES',
  SAVE_CATEGORIES = 'SAVE_CATEGORIES',
  GET_CATEGORIES = 'GET_CATEGORIES'
}

const loadCategories = createAction(CategoryEvent.LOAD_CATEGORIES)

const saveCategories = createAction(CategoryEvent.SAVE_CATEGORIES, action => {
  return (categories: Array<Category>) => action({
    categories
  })
})

const getCategories = createAction(CategoryEvent.GET_CATEGORIES)

const CategoryActionCreator = {
  loadCategories,
  saveCategories,
  getCategories
}

export default CategoryActionCreator
