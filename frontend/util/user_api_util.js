export const fetchUserByUrl = userUrl => (
  $.ajax({
    url: `api/users/url/${userUrl}`,
    method: 'GET'
  })
);

export const fetchUserFriends = userId => (
  $.ajax({
    url: `api/users/${userId}/friends`,
    method: 'GET'
  })
);

export const fetchUser = userId => (
  $.ajax({
    url: `api/users/${userId}`
  })
);