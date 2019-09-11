import { AxiosResponse } from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { CategoryEvent } from "../../actions/Category";
import AppActionCreator from "../../actions";


function* loadCateories() {
  const categories = [
      {
          name: 'Study',
          url: ''
      },
      {
        name: 'Test',
        url: ''
    }
  ]
  yield put(AppActionCreator.Category.saveCategories(categories))
}


function* loadCateoriesWatcher() {
    yield takeEvery(CategoryEvent.LOAD_CATEGORIES, loadCateories);
}

export default loadCateoriesWatcher;
