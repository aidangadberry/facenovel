import * as ApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const createComment = comment => dispatch => (
  ApiUtil.createComment(comment).then(res => dispatch(receiveComment(res)))
);