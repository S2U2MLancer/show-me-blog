import { ActionType } from 'typesafe-actions';
import getUserInfo from './UserInfo';
import { getMenuListAction } from './Menu';

const AppActionProducer = {
  getUserInfo,
  getMenuListAction
};

// type AppAction = ActionType<typeof actions>;

export default AppActionProducer;