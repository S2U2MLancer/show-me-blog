import React from 'react';
import { bindActionCreators, Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import { AppStore } from '../../reducers';
import { UserInfo } from '../../reducers/UserInfo';
import UserInfoElement from '../../components/UserInfo';
import AppActionProducer from '../../actions';
import { StoreUserInfoAction } from '../../actions/UserInfo';
import CategoriesElement from '../../components/Category';
import { Category, Categories } from '../../reducers/Category';

export interface LeftNavElementProps {
  getUserInfoAction: any,
  getMenuList: any,
  userInfo: UserInfo,
  categories: Categories
}

class LeftNavElement extends React.Component<LeftNavElementProps> {

  componentWillMount() {
    this.props.getUserInfoAction();
    this.props.getMenuList();
  }

  render() {
    const { userInfo, categories } = this.props;
    if (userInfo === undefined || Object.keys(userInfo).length === 0) {
      return (
        <div />
      );
    }

    return (
      <div className='container'>
        <div className='row'>
          <UserInfoElement userInfo={userInfo} />
        </div>
        <div className='row'>
          <CategoriesElement categories={categories} />
        </div>
        <div className='row'>
        </div>
      </div>
    );
  }
}

const stateToProps = (state: AppStore) => ({
  userInfo: state.userInfo,
  menuList: state.menuList
});

const dispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    getUserInfoAction: AppActionProducer.UserActions.fetchUserInfo,
    getMenuList: AppActionProducer.getMenuListAction
  }, dispatch);

const LeftNav = connect(stateToProps, dispatchToProps)(LeftNavElement);
export default LeftNav;