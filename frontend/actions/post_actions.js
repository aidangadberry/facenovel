import * as ApiUtil from '../util/post_api_util';

export const RECEIVE_POST_PAYLOAD = 'RECEIVE_POST_PAYLOAD';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receivePostPayload = postPayload => ({
  type: RECEIVE_POST_PAYLOAD,
  postPayload
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
  ApiUtil.fetchUserPosts(userId).then(res => dispatch(receivePostPayload(res)))
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