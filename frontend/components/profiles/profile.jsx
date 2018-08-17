import React from 'react';
import ProfileCover from './profile_cover';
import ProfileContent from './profile_content';

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchUserByUrl(this.props.userUrl).then(
      res => this.props.fetchAssociatedRequest(this.props.currentUserId, res.user.id)
    );
  }

  render() {
    if (this.props.user === undefined) {
      return <div></div>
    } else {
      return (
        <div className="profile-container">
          <ProfileCover
            user={this.props.user}
            currentUserId={this.props.currentUserId}
            friend={this.props.friend}
            sendFriendRequest={this.props.sendFriendRequest}
            approveFriendRequest={this.props.approveFriendRequest}
            denyFriendRequest={this.props.denyFriendRequest}
            />
          <ProfileContent user={this.props.user}/>
        </div>
      )
    }

  }
}

export default Profile;
