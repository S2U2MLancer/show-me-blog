import { ActionType } from 'typesafe-actions';
import getUserInfoAction from './GetUserInfo';

const actions = {
  getUserInfoAction
};

type AppAction = ActionType<typeof actions>;

export default AppAction;