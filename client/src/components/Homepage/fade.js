import React, { Component } from 'react'
import './fade.css'
import Particles from 'react-particles-js';
import BigBangStarField from 'react-big-bang-star-field'
import StarfieldAnimation from 'react-starfield-animation'
import ReactAnimatedWeather from 'react-animated-weather';

const defaults = {
  icon: 'WIND',
  color: 'white',
  size: 512,
  animate: true
};

export default class Fade extends Component {
  render() {
    return (
      <div className="whole-fade">
		  <img src="./night3.png"></img>
    
 
		  <div className="logo">
			  <img src="logo2.png"></img>
		  </div>
		 <div className="img-back">
       
     <i class="fa fa-facebook" aria-hidden="true"></i>
     <i class="fa fa-instagram" aria-hidden="true"></i>
     <i class="fa fa-twitter" aria-hidden="true"></i>
       <i class="fa fa-youtube" aria-hidden="true"></i>
       <div className="live">
         <div className="sig-l">
       <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#ff073a" class="bi bi-wifi" viewBox="0 0 16 16">
  <path d="M15.385 6.115a.485.485 0 0 0-.048-.736A12.443 12.443 0 0 0 8 3 12.44 12.44 0 0 0 .663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.717 2.164.204.148.489.13.668-.049z"/>
  <path d="M13.229 8.271c.216-.216.194-.578-.063-.745A9.456 9.456 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.577 1.336c.205.132.48.108.652-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.472 6.472 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.408.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.611-.091l.015-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .708 0l.707-.707z"/>
</svg></div>
         <div className="sig"></div>
        <div className="sig-r">       <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#ff073a" class="bi bi-wifi" viewBox="0 0 16 16">
  <path d="M15.385 6.115a.485.485 0 0 0-.048-.736A12.443 12.443 0 0 0 8 3 12.44 12.44 0 0 0 .663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.717 2.164.204.148.489.13.668-.049z"/>
  <path d="M13.229 8.271c.216-.216.194-.578-.063-.745A9.456 9.456 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.577 1.336c.205.132.48.108.652-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.472 6.472 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.408.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.611-.091l.015-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .708 0l.707-.707z"/>
</svg></div>
         
       </div>
  
       
     </div>
    
	
      </div>
    )
  }
}
