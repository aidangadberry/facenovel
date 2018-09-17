import React from 'react';
import { connect } from 'react-redux';
import ProfileNavbar from './profile_navbar';
import FriendButton from './friend_button';

class ProfileCover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="cover-photo">
          <div className="cover-content-left">
            <div className="profile-photo-container">
              <div className="profile-photo" />
            </div>
            <div className="profile-name">
              {this.props.user.fname} {this.props.user.lname}
            </div>
          </div>
          <div className="cover-content-right">
            <FriendButton friend={this.props.friend} user={this.props.user}/>
            <button><div>Message</div></button>
          </div>
        </div>
        <div>
        </div>
        <ProfileNavbar />
      </div>
    )
  }
}

export default ProfileCover;
