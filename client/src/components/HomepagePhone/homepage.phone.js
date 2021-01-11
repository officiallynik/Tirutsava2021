import React , {useState} from 'react';
import './homepage.phone.css';
import Slider from 'react-slick';
import Social from './social';
import NavbarNew from './../../pages/Homepage/Navbar/Navbarnew';
import NavbarNewphone from './../../pages/Homepage/Navbar/Navabarnewphone';
var currentMode = ((new Date()).getHours() < 18 &&
(new Date()).getHours() >= 6) ? 
'day-mode' : 
'night-mode'


const HomepagePhone = () => {
    var [boolshow,setbool] = useState(false)
var clickedham = () => {
    setbool(!boolshow)
}

    return ( 
        <React.Fragment>
            <div className={`phone-body-${currentMode} conatainer-fluid`}>
            <div className={boolshow ? "animate-ham-phone" :"hamburger-whole-phone"} onClick={clickedham}>
                    <div className="line-phone ln1-phone"></div>
                    <div className="line-phone ln2-phone"></div>
                    <div className="line-phone ln3-phone"></div>
                </div>
                <div className="navbar-section"><NavbarNewphone boolshownav={boolshow}></NavbarNewphone></div>
                    <div className="tirutsava-box "><p className="tirutsava-title">Tirutsava</p></div>
                    <div className="phone-cont-lrn">
                        <div className={`texts-${currentMode}`}>text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </div>
                    </div>
                    <div className="btn-box"><button className="learn-more">Learn More</button></div>

                    <div className="events-phone-box1">
                    <Slider speed={500} slidesToScroll={1} slidesToShow={1} infinite={true} autoplaySpeed={2000} autoplay={true} pauseOnHover={true} fade={true}>
                        <div className="img-class"> <img className="images-phone-slider" src="./headphone.png" alt="headphone pic"/></div>
                        <div className="img-class"> <img className="images-phone-slider" src="./technical2.png" alt="headphone pic"/></div>
                        <div className="img-class"> <img className="images-phone-slider" src="./games.png" alt="headphone pic"/></div>
                    </Slider>
                    </div>
                  <div className="social-phone"><Social></Social></div>
            
              
               
            </div>
        </React.Fragment>
     );
}
 
export default HomepagePhone;