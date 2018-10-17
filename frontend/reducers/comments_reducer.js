import { 
  RECEIVE_COMMENTS 
} from '../actions/comment_actions';
import { RECEIVE_POST_PAYLOAD } from '../actions/post_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_POST_PAYLOAD:
      return Object.assign(newState, action.postPayload.comments);
    case RECEIVE_COMMENTS:
      return Object.assign(newState, action.comments);
    default: 
      return state;
  }
};

export default commentsReducer;