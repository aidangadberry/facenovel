export const fetchPostComments = postId => (
  $.ajax({
    url: `api/posts/${postId}/comments`,
    method: 'GET',
  })
);