import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import userUrlsReducer from './user_urls_reducer';
import friendsReducer from './friends_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  userUrls: userUrlsReducer,
  friends: friendsReducer
});

export default entitiesReducer;
