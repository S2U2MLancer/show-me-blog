import { ActionType } from 'typesafe-actions';
import UserActions from './UserInfo';
import { getMenuListAction } from './Menu';

const AppActionProducer = {
  UserActions,
  getMenuListAction
};

// type AppAction = ActionType<typeof actions>;

export default AppActionProducer;