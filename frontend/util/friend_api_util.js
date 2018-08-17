export const sendFriendRequest = (requestingId, requestedId) => (
  $.ajax({
    url: 'api/friends',
    method: 'POST',
    data: {friend: {requestingId, requestedId}}
  })
);

export const approveFriendRequest = friendId => (
  $.ajax({
    url: `api/friends/${friendId}`,
    method: 'PATCH'
  })
);

export const denyFriendRequest = friendId => (
  $.ajax({
    url: `api/friends/${friendId}`,
    method: 'DELETE'
  })
);

export const fetchAssociatedRequest = (currentUserId, userId) => (
  $.ajax({
    url: `api/users/${currentUserId}/friends/${userId}`,
    method: 'GET'
  })
)

export const fetchAssociatedRequests = currentUserId => (
  $.ajax({
    url: `api/users/${currentUserId}/friends`,
    method: 'GET'
  })
)
