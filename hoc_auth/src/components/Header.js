import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
	//helper function
	//onClick is the eventHandler, if triggered, call the function/action creator
	//'this.props.authenticate' is the action creator we created //the value false is the value of the isLoggedIn parameter
	authButton() {
		if (this.props.authenticated) {
			return <button onClick={()=> this.props.authenticate(false)}>Sign Out</button>;
		} else{
			return <button onClick={()=> this.props.authenticate(true)}>Sign In</button>
		}
	}
	render() {
		return(
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<Link to="/">Hompage</Link>
					</li>
					<li className="nav-item">
						<Link to="/secret">Secret</Link>
					</li>
					<li className="nav-item">
						<Link to="">
							{this.authButton()}
						</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

//gets the state from the reducers to provider
function mapStateToProps(state){
	//state is from the parameter
	//.authenticated is from auth reducer 'authenticated' which holds the new value of state
	//now we can use this.props.authenticated
	return { authenticated: state.authenticated };
}

//connect wraps header component to communicate with provider (the one that communicates with reducers when something has been changed) and this tells provider when an action has been triggered/something has been changed
export default connect(mapStateToProps, actions) (Header);