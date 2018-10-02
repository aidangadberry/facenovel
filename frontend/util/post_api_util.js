export const fetchPost = postId => $.ajax({
  url: `api/posts/${postId}`,
  method: 'GET'
});

export const fetchWallPosts = userId => $.ajax({
  url: `api/users/${userId}/posts`,
  method: 'GET'
});

export const fetchFeedPosts = userId => $.ajax({
  url: `api/users/${userId}/feed`,
  method: 'GET'
});

export const createPost = post => $.ajax({
  url: 'api/posts',
  method: 'POST',
  data: {post}
});

export const updatePost = post => $.ajax({
  url: `api/posts/${post.id}`,
  method: 'PATCH',
  data: { post }
});

export const deletePost = postId => $.ajax({
  url: `api/posts/${postId}`,
  method: 'DELETE'
});