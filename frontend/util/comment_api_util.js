export const fetchPostComments = postId => (
  $.ajax({
    url: `api/posts/${postId}/comments`,
    method: 'GET',
  })
);

export const createComment = comment => (
  $.ajax({
    url: 'api/comments',
    method: 'POST',
    data: {comment}
  })
);