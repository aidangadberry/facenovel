export const findUserByUrl = userUrl => (
  $.ajax({
    url: `api/users/${userUrl}`,
    method: 'GET'
  })
)
