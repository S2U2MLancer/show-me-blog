import { AxiosResponse } from "axios";



function* loadCateories() {
  const response: AxiosResponse<UserInfo> = yield call(
    () => axios.get<UserInfo>("http://localhost:7777/categories/"));
    if (response && response.status === 200) {
      yield put(AppActionProducer.UserActions.storeUserInfo({
        id: 'id',
        userInfo: response.data
      }))
    }
}