import React from 'react';

class FriendButton extends React.Component {
  constructor(props) {
    super(props);
  }
  
  dropdownContent() {
    const { friend } = this.props;
    
    // a friend request between currentUser and user exists
    if (friend !== null) {
      if (friend.accepted === false) {
        if (friend.requestedId === this.props.currentUserId) {
          // currentUser was requested by user
          // currentUser can approve the request
          return (
            <div>
              <button onClick={() => this.props.approveFriendRequest(friend.id)}>Confirm</button><br />
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

  friendDropdownButtonText() {
    const { friend } = this.props;

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

  render() {
    return (
      <div>
        <button>{this.friendDropdownButtonText()}</button>
        <div className="friend-dropdown">
          <i className="dropdown-arrow"></i>
          {this.dropdownContent()}
        </div>
      </div>
    )
  }
}

export default FriendButton;