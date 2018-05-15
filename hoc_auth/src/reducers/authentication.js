//import the action type
import { CHANGE_AUTH } from '../actions/types';
//export a function that has 2 parameters, the default state, false, assuming  that everytime a user accesses the webapp, the user is logged out, and the action as 2nd. In CHANGE_AUTH action, if state is false by default, return state, otherwise, if there is an action, return the action.payload, which will then be 'true' from 'isLoggedIn' parameter of the payload of 'authenticate' function action.
export default function(state = false, action) {
	switch(action.type) {
		case CHANGE_AUTH:
			return action.payload;
		default:
			return state;
	}
}