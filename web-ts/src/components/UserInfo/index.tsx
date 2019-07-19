import React from 'react';
import { UserInfo, Contact } from '../../reducers/UserInfo';

interface Props {
  userInfo: UserInfo
}

class UserInfoElement extends React.Component<Props> {
  
  render() {
    const userInfo: UserInfo = this.props.userInfo;
    return (
      <div className="container">
        <div className="card text-center">
          <img className="card-img-top" src={userInfo.avatar} alt="" />
          <div className="card-body">
            <h5 className="card-title">{userInfo.username}</h5>
            <p className="card-subtitle">{userInfo.motto}</p>
            {userInfo.contacts.map((element: Contact) => (
              <a key={`contact-${element.name}`} href={element.url} className="card-link">
                <i className={`fa fa-${element.name} fa-2x`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfoElement;
