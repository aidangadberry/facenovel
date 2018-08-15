import React from 'react';
import { connect } from 'react-redux';
import ProfileNavbar from './profile_navbar';

class ProfileCover extends React.Component {
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
            <button>Update Info</button>
            <button>Message</button>
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
