//import type of action from types.js
import { CHANGE_AUTH } from './types';

//export an authenticate function or action creator which holds a parameter isLoggedIn which is the payload, the one that holds the new data from when the user does something (default is false, so if user clicks sign in, payload turns true), in example, clicks sign in
export function authenticate(isLoggedIn) {
	return {
		type: CHANGE_AUTH,
		payload: isLoggedIn
	};
}