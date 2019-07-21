import React from 'react';
import { bindActionCreators, Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../reducers';
import { UserInfo } from '../../reducers/UserInfo';
import UserInfoElement from '../../components/UserInfo';
import AppActionProducer from '../../actions';
import { GetUserInfoAction } from '../../actions/GetUserInfo';
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
    this.props.getUserInfoAction('id');
    this.props.getMenuList();
  }

  render() {
    const { userInfo, menuList } = this.props;
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
          <MenuListElement menuList={menuList.menuList} />
        </div>
        <div className='row'>
        </div>
      </div>
    );
  }
}

const stateToProps = (state: AppState) => ({
  userInfo: state.getUserInfo,
  menuList: state.getMenuList
});

const dispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    getUserInfoAction: AppActionProducer.getUserInfo,
    getMenuList: AppActionProducer.getMenuListAction
  }, dispatch);

const LeftNav = connect(stateToProps, dispatchToProps)(LeftNavElement);
export default LeftNav;