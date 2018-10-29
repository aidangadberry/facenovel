import { 
  RECEIVE_COMMENT 
} from '../actions/comment_actions';
import { RECEIVE_POST_PAYLOAD } from '../actions/post_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_POST_PAYLOAD:
      return Object.assign(newState, action.postPayload.comments);
    case RECEIVE_COMMENT:
      const {id, authorId, postId, body} = action.comment;
    
      if (newState[postId]) {
        newState[postId] = [...newState[postId], {id, authorId, body}];
      } else {
        newState[postId] = [{id, authorId, body}];
      }
      return newState;
    default: 
      return state;
  }
};

export default commentsReducer;