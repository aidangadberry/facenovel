import React from 'react'
import { connect } from 'react-redux';
import { fetchUserByUrl } from '../../actions/user_actions';
import { getUserFromUrl, getRequest } from '../../reducers/selectors';
import {
  fetchAssociatedRequest,
  sendFriendRequest,
  approveFriendRequest,
  denyFriendRequest
} from '../../actions/friend_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.session.currentUserId,
  userUrl: ownProps.match.params.userUrl,
  user: getUserFromUrl(state, ownProps.match.params.userUrl),
  friend: getRequest(state, getUserFromUrl(state, ownProps.match.params.userUrl))
});

const mapDispatchToProps = dispatch => ({
  fetchUserByUrl: url => dispatch(fetchUserByUrl(url)),
  fetchAssociatedRequest: (currentUserId, userId) => dispatch(fetchAssociatedRequest(currentUserId, userId)),
  sendFriendRequest: (currentUserId, userId) => dispatch(sendFriendRequest(currentUserId, userId)),
  approveFriendRequest: friendId => dispatch(approveFriendRequest(friendId)),
  denyFriendRequest: friendId => dispatch(denyFriendRequest(friendId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
