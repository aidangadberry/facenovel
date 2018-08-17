import React from 'react';
import { connect } from 'react-redux';
import ProfileNavbar from './profile_navbar';

class ProfileCover extends React.Component {
  constructor(props) {
    super(props);
  }

  dropdownContent(friend) {
    // a friend request between currentUser and user exists
    if (friend !== null) {
      if (friend.accepted === false) {
        if (friend.requestedId === this.props.currentUserId) {
          // currentUser was requested by user
          // currentUser can approve the request
          return (
            <div>
              <button onClick={() => this.props.approveFriendRequest(friend.id)}>Confirm</button><br/>
              <button onClick={() => this.props.denyFriendRequest(friend.id)}>Delete Request</button>
            </div>
          );
        } else {
          // user was requested by currentUser
          // currentUser can cancel the request
          return (<div><button onClick={() => this.props.denyFriendRequest(friend.id)}>Cancel Request</button></div>);
        }
      } else {
        // currentUser and user are already friends
        // currentUser can unfriend user
        return (<div><button onClick={() => this.props.denyFriendRequest(friend.id)}>Unfriend</button></div>)
      }
    }
  }

  friendDropdownButtonText(friend) {
    if (friend === null) {
      return (<div
        onClick={() => this.props.sendFriendRequest(this.props.currentUserId, this.props.user.id)}
        >Add Friend</div>
      );
    } else {
      if (friend.accepted === false) {
        if (friend.requestedId === this.props.currentUserId) {
          // currentUser was requested by user
          // currentUser can approve the request
          return (
            <div>Respond to Friend Request</div>
          );
        } else {
          // user was requested by currentUser
          // currentUser can cancel the request
          return (<div>Friend Request Sent</div>);
        }
      } else {
        // currentUser and user are already friends
        // currentUser can unfriend user
        return (<div>Friends</div>)
      }
    }
  }

  friendButton(friend) {
    return (
      <div>
        <button>{this.friendDropdownButtonText(friend)}</button>
        <div className="friend-dropdown">
          <i className="dropdown-arrow"></i>
          {this.dropdownContent(friend)}
        </div>
      </div>
    )
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
            {this.friendButton(this.props.friend)}
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
