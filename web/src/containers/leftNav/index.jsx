/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import UserInfoElement from '../../components/userInfo';
import { getUserInfoAction } from '../../actions/getUserInfoAction';

class LeftNavElement extends React.Component {
  componentWillMount() {
    const { getUserInfoEvent } = this.props;
    getUserInfoEvent('id');
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

const stateToProps = state => ({
  userInfo: state.getUserInfo,
});

const dispatchToProps = dispatch => ({
  getUserInfoEvent: (id) => {
    dispatch(getUserInfoAction(id));
  },
});

const LeftNav = connect(stateToProps, dispatchToProps)(LeftNavElement);
export default LeftNav;
