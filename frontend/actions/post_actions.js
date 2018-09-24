import * as ApiUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

const removePost = postId => ({
  type: REMOVE_POST,
  postId
});


export const requestUserPosts = userId => dispatch => (
  ApiUtil.fetchUserPosts(userId).then(res => dispatch(receivePosts(res)))
);

export const requestPost = postId => dispatch => (
  ApiUtil.fetchPost(postId).then(res => dispatch(receivePost(res)))
);

export const createPost = post => dispatch => (
  ApiUtil.createPost(post).then(res => dispatch(receivePost(res)))
);

export const updatePost = post => dispatch => (
  ApiUtil.updatePost(post).then(res => dispatch(receivePost(res)))
);

export const deletePost = postId => dispatch => (
  ApiUtil.deletePost(postId).then(res => dispatch(removePost(res.id)))
)