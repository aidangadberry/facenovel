import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const userUrlsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(newState, {[action.currentUser.userUrl]: action.currentUser.id});
    case RECEIVE_USER:
      return Object.assign(newState, {[action.user.userUrl]: action.user.id});
    default:
      return state;
  }
};

export default userUrlsReducer;
