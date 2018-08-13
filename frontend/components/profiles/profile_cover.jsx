import React from 'react';
import ProfileNavbar from './profile_navbar';

class ProfileCover extends React.Component {
  componentDidMount() {
    this.props.fetchUserByUrl(this.props.userUrl);
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <img src="#" className="cover-photo" />
        <div>
          <div className="cover-content-left">
            <img src="#" className="profile-picture" />
            <div>
            </div>
          </div>
          <div className="cover-content-right">
            <button>Update Info/Friends?</button>
            <button>Message</button>
          </div>
        </div>
        <ProfileNavbar />
      </div>
    )
  }
}

// {this.props.user.fname} {this.props.user.lname}

export default ProfileCover;
