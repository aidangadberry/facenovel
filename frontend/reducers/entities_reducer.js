import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import userUrlsReducer from './user_urls_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  userUrls: userUrlsReducer
});

export default entitiesReducer;
