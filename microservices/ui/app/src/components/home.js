import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import ProductList from './ProductList.js';
import ImageCarousel from './imageCarousel.js';
class Home extends Component{
  constructor(){
        super();
        this.state={
          products: []
        }}

  loadData(){
      fetch("https://app.banner20.hasura-app.io/getproducts")
      .then(response => response.json())
      .then(json => {
        this.setState({
          products: json,
        });
      });
    }
    componentDidMount(){
      this.loadData();
    }
    render(){

        return (
          <div>
          <div>
          <ImageCarousel />
          </div>
          <div className='container'>
          <ProductList products={this.state.products} />
          </div>
          </div>          
 
        );
    }
} 

export default Home;