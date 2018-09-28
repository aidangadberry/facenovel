import {
  RECEIVE_POST_PAYLOAD,
  RECEIVE_POST,
  REMOVE_POST
} from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_POST_PAYLOAD:
      return Object.assign(newState, action.postPayload.posts);
    case RECEIVE_POST:
      return Object.assign(newState, {[action.post.id]: action.post})
    case REMOVE_POST:
      delete newState[action.postId];
      return newState;
    default:
      return state
  }
};

export default postsReducer;