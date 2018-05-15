import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import Async from './components/async';

const store = createStore(reducers, {}, applyMiddleware(Async,reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.querySelector('#root')
);
