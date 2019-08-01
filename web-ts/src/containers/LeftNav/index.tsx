import React from 'react';
import { bindActionCreators, Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import { AppStore } from '../../reducers';
import { UserInfo } from '../../reducers/UserInfo';
import UserInfoElement from '../../components/UserInfo';
import AppActionProducer from '../../actions';
import { StoreUserInfoAction } from '../../actions/UserInfo';
import MenuListElement from '../../components/Menu';
import { Menu, MenuList } from '../../reducers/Menu';

export interface LeftNavElementProps {
  getUserInfoAction: any,
  getMenuList: any,
  userInfo: UserInfo,
  menuList: MenuList
}

class LeftNavElement extends React.Component<LeftNavElementProps> {

  componentWillMount() {
    this.props.getUserInfoAction();
    this.props.getMenuList();
  }

  render() {
    const { userInfo, menuList } = this.props;
    if (userInfo === undefined || Object.keys(userInfo).length === 0) {
      return (
        <div />
      );
    }

    console.log(this.props)
    return (
      <div className='container'>
        <div className='row'>
          <UserInfoElement userInfo={userInfo} />
        </div>
        <div className='row'>
          <MenuListElement menuList={menuList.menuList} />
        </div>
        <div className='row'>
        </div>
      </div>
    );
  }
}

const stateToProps = (state: AppStore) => {
    console.log(state)
    return ({
        userInfo: state.userInfo,
        menuList: state.menuList
    })
};

const dispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    getUserInfoAction: AppActionProducer.UserActions.fetchUserInfo,
    getMenuList: AppActionProducer.getMenuListAction
  }, dispatch);

const LeftNav = connect(stateToProps, dispatchToProps)(LeftNavElement);
export default LeftNav;