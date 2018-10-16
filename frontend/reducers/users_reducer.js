import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_POST_PAYLOAD } from '../actions/post_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_POST_PAYLOAD:      
      for (let userId in action.postPayload.users) {
        const user = action.postPayload.users[userId];
        
        if (newState[userId]) {
          Object.assign(newState[userId], user);
        } else {
          newState[userId] = user;
        }
      }

      return newState;
    case RECEIVE_USERS:
      return Object.assign(newState, action.users);
    case RECEIVE_CURRENT_USER:
      return Object.assign(newState, {
        [action.currentUser.id]: action.currentUser
      });
    case RECEIVE_USER:
      return Object.assign(newState, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default usersReducer;
