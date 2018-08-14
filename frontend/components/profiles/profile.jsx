import React from 'react';
import ProfileCover from './profile_cover';
import ProfileContent from './profile_content';

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchUserByUrl(this.props.userUrl);
  }

  render() {
    console.log(this.props);
    return (
      <div className="profile-container">
        <ProfileCover />
        <ProfileContent />
      </div>
    )
  }
}

export default Profile;
