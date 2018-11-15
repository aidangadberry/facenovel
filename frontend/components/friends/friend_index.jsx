import React from 'react';
import FriendIndexItem from './friend_index_item';

class FriendIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: null
    };
  }

  componentDidMount() {
    this.props
      .requestUserFriends(this.props.userId)
      .then(res => this.setState({ friends: Object.values(res.users) }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userUrl !== this.props.match.params.userUrl) {
      this.props
        .requestUserFriends(this.props.userId)
        .then(res => this.setState({ friends: Object.values(res.users) }));
    }
  }

  render() {
    if (this.state.friends === null) return null;

    const friends = this.state.friends.map(friend => {
      return <FriendIndexItem user={friend} key={friend.id} />;
    });

    return (
      <div className="sidebar-friends">
        <div className="friends-header">Friends · <p>{friends.length}</p></div>
        <div className="friend-index">{friends}</div>
      </div>
    );
  }
}

export default FriendIndex;