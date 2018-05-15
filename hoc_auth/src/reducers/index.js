import { combineReducers } from 'redux';
//import auth reducer
import authenticationReducer from './authentication';
//combine reducers here so we could pass it on the provider of react-redux where the store is, the state manager, only source of truth, then render UI again if the auth state has been changed
const rootReducer = combineReducers({
	//new app state
	//authenticated: true
  authenticated: authenticationReducer
});

export default rootReducer;
