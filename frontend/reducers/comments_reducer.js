import { 
  RECEIVE_COMMENTS 
} from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return Object.assign(newState, action.comments);
    default: 
      return state;
  }
};

export default commentsReducer;