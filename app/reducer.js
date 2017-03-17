// Create a reducer.js file that exports Redux combineReducers with a blank object (to be filled later)
import { combineReducers } from 'redux';
import userResource  from './resources/user';

export default combineReducers({
  users: userResource.reducer,
  posts: userResource.reducer
});
