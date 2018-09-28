import React from 'react';
import ProfileCover from './profile_cover';
import ProfileContent from './profile_content';

class Profile extends React.Component {
  componentDidMount() {
    this.props.requestUserByUrl(this.props.userUrl);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userUrl !== this.props.match.params.userUrl) {
      this.props.requestUserByUrl(this.props.userUrl);
    }
  }

  render() {
    if (this.props.user === undefined) {
      return <div></div>
    } else {
      return (
        <div className="profile-container">
          <ProfileCover user={this.props.user} />
          <ProfileContent user={this.props.user}/>
        </div>
      )
    }

  }
}

export default Profile;
