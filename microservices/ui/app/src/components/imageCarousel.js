import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';

class ImageCarousel extends Component{
	
	render(){
		return(
			<div>
			<div id="demo" className="carousel slide" data-ride="carousel">

  
  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="laptop.jpg" alt="Laptop Offers" minwidth="1688px"width="100%" height="288px" />
    </div>
    <div className="carousel-item">
      <img src="onNext.jpg" alt="Samsung On Next" minwidth="1688px"width="100%" height="288px" />
    </div>
    <div className="carousel-item">
      <img src="mobiles.jpg" alt="Mobile Offers" minwidth="1688px"width="100%" height="288px"/>
    </div>
  </div>
  
  
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>
			</div>
			);

	}
}

export default ImageCarousel;