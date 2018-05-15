import { combineReducers } from 'redux';
//import users reducer
import usersReducer from './users';
//combine reducers here so we could pass it on the provider of react-redux where the store is, the state manager, only source of truth, then render UI again if the auth state has been changed
const rootReducer = combineReducers({
	//new app state
  users: usersReducer
});

export default rootReducer;

