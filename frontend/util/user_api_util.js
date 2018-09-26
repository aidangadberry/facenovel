export const findUserByUrl = userUrl => (
  $.ajax({
    url: `api/users/${userUrl}`,
    method: 'GET'
  })
);

export const fetchUserFriends = userId => (
  $.ajax({
    url: `api/users/${userId}/friends`,
    method: 'GET'
  })
);