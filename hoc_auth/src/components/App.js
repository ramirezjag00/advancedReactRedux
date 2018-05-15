import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Secret from './Secret';
import requireAuth from './require_authentication';

class App extends Component {
  render() {
    return (
      <div>
      	<BrowserRouter>
      		<div>
	      		<Header />
	      		<Route exact path="/" component={Home} />
	      		{/*wrap secret component with the HOC*/}
	      		<Route exact path="/secret" component={requireAuth(Secret)} />
        	</div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


