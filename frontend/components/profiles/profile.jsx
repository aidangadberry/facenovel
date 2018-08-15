import React from 'react';
import ProfileCover from './profile_cover';
import ProfileContent from './profile_content';

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchUserByUrl(this.props.userUrl);
  }

  render() {
    if (this.props.user === undefined) {
      return <div></div>
    } else {
      return (
        <div className="profile-container">
          <ProfileCover user={this.props.user} />
          <ProfileContent />
        </div>
      )
    }

  }
}

export default Profile;
