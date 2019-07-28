import axios, {AxiosResponse} from 'axios';
import {UserInfo} from "../../reducers/UserInfo";

export function* getUserInfo() {
    const response: AxiosResponse<UserInfo> = yield axios.get<UserInfo>("/static/userInfo.json")
        .catch((err) => {
            console.log(err)
            return undefined;
        });
    if (response && response.status === 200) {
        return response.data;
    }
    return undefined;
}