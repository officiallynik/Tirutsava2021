import React from 'react';
import './homepage.phone.css';
import Slider from 'react-slick';


const HomepagePhone = () => {
    return ( 
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="tirutsava-box col-md-12"><p className="tirutsava-title">Tirutsava</p></div>
                    <div className="col-md-12">
                        <div className="texts">text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </div>
                    </div>
                    <div className="btn-box btn"><button className="learn-more">Learn More</button></div>

                    <div className="events-phone-box">
                        <Slider speed={500} slidesToScroll={1} slidesToShow={1} infinite={true} autoplaySpeed={2000} autoplay={true} pauseOnHover={true} fade={true}>
                            <img className="images-phone-slider" src="./headphone.png" alt="headphone pic"/>
                            <img className="images-phone-slider" src="./technical2.png" alt="tech pic"/>
                            <img className="images-phone-slider" src="./games.png" alt="online pic"/>
                        </Slider>
                    </div>
                    
                    {/*<div className="circle-wrapper">
                        <div className="half-circle"></div> 
                    </div>*/}

                    <div className="social-media-phone">
                        <i class="fa fa-facebook mr-2" aria-hidden="true"></i>
                        <i class="fa fa-instagram mr-2" aria-hidden="true"></i>
                        <i class="fa fa-twitter mr-2" aria-hidden="true"></i>
                        <i class="fa fa-youtube mr-2" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default HomepagePhone;