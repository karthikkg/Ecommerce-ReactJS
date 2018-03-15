import React, {Component} from 'react';
import Search from './search.js';

class Header extends Component{

	constructor(){
        super();
        this.state={
          products: []
        }}
	search(e){
		e.preventDefault();
		alert('Please wait while results are loading')

		var keyword = this.refs.keyword.value.slice(1);
		var url = "https://app.banner20.hasura-app.io/search";
	
			var requestOptions = {
			    "method": "POST",
			    "headers": {
			        "Content-Type": "application/json"
			    }
			};
	
			var body = {
			    "provider": "username",
			    "data": {
			    	"search": keyword
			    }
			};
	
			requestOptions.body = JSON.stringify(body);
	
			fetch(url, requestOptions)
			.then(response => response.json())
      .then(json => {
        this.setState({
          products: json,
        });
      });
    }
    
	render(){
		if(this.state.products.length >0){
		    var searchResult=<Search products={this.state.products} searchTerm={this.refs.keyword.value}/>;
		    }
		const style={
			padding: '10px',
			backgroundColor:'#7c4dff',
			textAlign: 'center'
		};
		return(
			<div>
		<div className="row" style={style} >
		      <div className="col-md-2 ">
		          <a className="navbar-brand text-center" href="#"><img src="brandLogoElikart.png" /> </a>
		      </div>
		  
		      <div className="col-md-4 " style={{paddingTop:'10px'}}>    
		        <form className="form-inline" onSubmit={this.search.bind(this)}>
		          <input className="form-control" type="text" ref='keyword'placeholder="Search" />
		          <button className="btn btn-success" type="submit">Search</button>
		        </form>
		        
		      </div>
		      
		      <div className="col-md-6">
		        <ul className="navlist navbar-toggle">
		          <li>
		            <a className="nav-link" href="/">Home</a>
		          </li>
		          <li>
		            <a className="nav-link" href="/login">Login &amp; Signup</a>
		          </li>
		          <li>
		            <a className="nav-link" href="/cart">Cart</a>
		          </li>
		          <li>
		            <a className="nav-link" href="/addProduct">Add Product</a>
		          </li>
		          <li>
		            <a className="nav-link" href="/">Log Out</a>
		          </li>
		        </ul>
		      </div>

		    </div>
		    {searchResult}
		    
		    </div>
		    );
	}
}

export default Header;