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

export const updatePhoto = (userId, photoData) => (
  $.ajax({
    url: `api/users/${userId}/photo`,
    method: 'PATCH', 
    data: photoData,
    contentType: false,
    processData: false
  })
);

export const searchUsers = query => (
  $.ajax({
    url: 'api/users/search',
    method: 'GET',
    data: { query }
  })
);