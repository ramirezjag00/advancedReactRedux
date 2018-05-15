//we are running a function which always have an object of dispatch that when run, 
export default function({ dispatch }) {
	
	//will run next function then another 
	//action function, 
	return next => action => {
		
		//logs all actions that got dispatched
		// console.log('we have a promise',action);


		//if action does not have payload
		//or, the payload does not have a .then property
		//we dont care about it, send it on
		if(!action.payload || !action.payload.then) {
		//next which means send this action to the next middleware on my stack 
			return next(action);
		}

		//.then make sure all the action's promise resolves
		action.payload
			.then(function(response){
				//take all action that it contains and expand it with response
				//action has all the existing type
				//payload has the promise that we don't care, that is why we knock it off and replace it with the response 

				//create a new action with the old type, but
				//replace the promise with the response data
				const newAction = {...action, payload: response};
				//lastly dispatch the newAction from the top, to the applyMiddleware of the store, inside the root index.js, which will then be in Provider that communicates with connect
				dispatch(newAction);
			});

	};
}

//ES5 SYNTAX
// export default function({dispatch}) {
// 	return function(next) {
// 		return function(actions) {
// 			if(!action.payload || !action.payload.then) {

// 			return next(action);
//			}
			// action.payload
			// .then(function(response){
			// const newAction = {...action, payload: response};
			// 	dispatch(newAction);
			// });	
// 		}
// 	}
// }