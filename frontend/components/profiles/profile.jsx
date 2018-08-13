import React from 'react';
import ProfileCover from './profile_cover';
import ProfileContent from './profile_content';

class Profile extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ProfileCover
          userUrl={this.props.match.params.userUrl}
          fetchUserByUrl={this.props.fetchUserByUrl}
          />
        <ProfileContent />
      </div>
    )
  }
}

export default Profile;
