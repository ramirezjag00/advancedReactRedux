import {FETCH_USERS} from '../actions/types';

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_USERS:
		// console.log(action.payload);
			//return existing list of users ...state
			//along with the new list of users ...action.payload
			//spread operator '...' take the existing state and concat with the next item,
			//all the requested information that we care about is inside the action.payload.data
			return [...state, ...action.payload.data];
		default: return state;
	}
}