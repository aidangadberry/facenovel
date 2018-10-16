import * as ApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const requestPostComments = postId => dispatch => (
  ApiUtil.requestPostComments(postId).then(res => dispatch(receiveComments(res)))
);