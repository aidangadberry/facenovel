import * as ApiUtil from '../util/friend_api_util';

export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

const receiveFriend = friend => ({
  type: RECEIVE_FRIEND,
  friend
});

const receiveFriends = friends => ({
  type: RECEIVE_FRIENDS,
  friends
});

const removeFriend = friendId => ({
  type: REMOVE_FRIEND,
  friendId
});

export const sendFriendRequest = (requestingId, requestedId) => dispatch => (
  ApiUtil.sendFriendRequest(requestingId, requestedId).then(
    res => dispatch(receiveFriend(res))
  )
);

export const approveFriendRequest = friend => dispatch => (
  ApiUtil.approveFriendRequest(friend).then(
    res => dispatch(receiveFriend(res))
  )
);

export const denyFriendRequest = friend => dispatch => (
  ApiUtil.denyFriendRequest(friend).then(
    res => dispatch(removeFriend(res))
  )
);

export const fetchAssociatedRequest = (currentUserId, userId) => dispatch => {
  if (currentUserId !== userId) {
    return (ApiUtil.fetchAssociatedRequest(currentUserId, userId).then(
      res => dispatch(receiveFriend(res))
    ))
  }
}

export const fetchAssociatedRequests = currentUserId => dispatch => (
  ApiUtil.fetchAssociatedRequests(currentUserId).then(
    res => dispatch(receiveFriends(res))
  )
);
