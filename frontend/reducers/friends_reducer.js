import { RECEIVE_FRIEND, REMOVE_FRIEND, RECEIVE_FRIENDS } from '../actions/friend_actions';

const friendsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_FRIEND:
      if (Object.keys(action.friend).length === 0) return newState;
      return Object.assign(newState, {[action.friend.id]: action.friend});
    case RECEIVE_FRIENDS:
      return Object.assign(newState, action.friends);
    case REMOVE_FRIEND:
      delete newState[action.friendId];
      return newState;
    default:
      return state;
  }
}

export default friendsReducer;
