import React from 'react';
import { bindActionCreators, Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import { UserInfo } from '../../reducers/UserInfo';
import UserInfoElement from '../../components/UserInfo';
import AppAction from '../../actions';
import { AppState } from '../../reducers';
import getUserInfoAction, { GetUserInfoAction } from '../../actions/GetUserInfo';

export interface LeftNavElementProps {
  onGetUserInfoAction: any
  userInfo: UserInfo
}

class LeftNavElement extends React.Component<LeftNavElementProps> {

  componentWillMount() {
    const { onGetUserInfoAction } = this.props;
    onGetUserInfoAction('id');
  }

  render() {
    const { userInfo } = this.props;
    if (userInfo === undefined || Object.keys(userInfo).length === 0) {
      return (
        <div />
      );
    }
    return (
      <UserInfoElement userInfo={userInfo} />
    );
  }
}

const stateToProps = (state: AppState) => ({
  userInfo: state.getUserInfo,
});

const dispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    onGetUserInfoAction: getUserInfoAction
  }, dispatch);

const LeftNav = connect(stateToProps, dispatchToProps)(LeftNavElement);
export default LeftNav;