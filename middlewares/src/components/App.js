import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import UserList from './User_List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      	<BrowserRouter>
      		<div>
	      		<Route exact path="/" component={UserList} />
        	</div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


