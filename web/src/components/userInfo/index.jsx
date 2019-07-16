import React from 'react';
import PropTypes from 'prop-types';
import UserInfoEntity from '../../entity/userInfo';

const UserInfoElement = ({ userInfo }) => (
  <div className="container">
    <div className="card text-center">
      <img className="card-img-top" src={userInfo.avatar} alt="" />
      <div className="card-body">
        <h5 className="card-title">{userInfo.username}</h5>
        <p className="card-subtitle">{userInfo.motto}</p>
        {userInfo.contacts.map(element => (
          <a key={`contact-${element.name}`} href={element.url} className="card-link">
            <i className={`fa fa-${element.name} fa-2x`} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

UserInfoElement.propTypes = {
  userInfo: PropTypes.instanceOf(UserInfoEntity).isRequired,
};

export default UserInfoElement;
