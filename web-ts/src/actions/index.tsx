import UserActions from './UserInfo';
import CategoryActionCreator from './Category';

const AppActionCreator = {
  UserActions,
  Category: CategoryActionCreator
};

export default AppActionCreator;