import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { UserInfo } from '../../reducers/UserInfo';
import UserInfoElement from '../../components/UserInfo';
import AppActionCreator from '../../actions';
import CategoriesElement from '../../components/Category';
import { Category } from '../../reducers/Category';
import { RootState } from 'typesafe-actions';


export interface LeftNavElementProps {
  getUserInfoAction: any,
  loadMenuList: any,
  userInfo: UserInfo,
  categories: Category[]
}

class LeftNavElement extends React.Component<LeftNavElementProps> {

  componentWillMount() {
    this.props.getUserInfoAction();
    this.props.loadMenuList();
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

const stateToProps = (state: RootState) => ({
  userInfo: state.userInfo,
  categories: state.category
});

const dispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    getUserInfoAction: AppActionCreator.UserActions.fetchUserInfo,
    loadMenuList: AppActionCreator.Category.loadCategories,
  }, dispatch);

const LeftNav = connect(stateToProps, dispatchToProps)(LeftNavElement);
export default LeftNav;