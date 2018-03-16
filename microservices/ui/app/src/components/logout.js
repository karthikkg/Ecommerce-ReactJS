import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import Cookies from 'universal-cookie';

class Logout extends Component{
	
	removeCookies(){
		const cookies = new Cookies();
		cookies.set('auth_token', "None",{ path: '/' });
		cookies.set('hasura_id', "None",{ path: '/' });
		cookies.set('username', "None",{ path: '/' });
				
		alert('Logged Out succesfully')
		this.props.history.push("/")
	}
	componentDidMount(){
      this.removeCookies();
    }
	render(){
		
		return(

				<div>{this.removeCookies()} </div>
			);
	}
}
export default Logout;