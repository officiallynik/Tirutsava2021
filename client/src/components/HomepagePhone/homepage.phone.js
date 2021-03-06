import React , {useState} from 'react';
import './homepage.phone.css';
import Navbar from '../navbar/Navbar';
import { withRouter } from 'react-router-dom';
// import NavbarNew from './../../pages/Homepage/Navbar/Navbarnew';
var currentMode = ((new Date()).getHours() < 18 &&
(new Date()).getHours() >= 6) ? 
'day-mode' : 
'night-mode';

// var currentMode = "day-mode";


const HomepagePhone = props => {
    var [boolshow,setbool] = useState(false)
var clickedham = () => {
    setbool(!boolshow)
}

    return ( 
        <React.Fragment>
            <div>
                <Navbar />
            </div>

            <div>
                <img src={`city-${currentMode}.png`} style={{width: "100%", position: "fixed", bottom: 0, left: 0}} />
            </div>

            <div className={`phone-body-${currentMode} conatainer-fluid`}>
                {/* <div className="navbar-section"><NavbarNewphone boolshownav={boolshow}></NavbarNewphone></div> */}
                    <div className="tirutsava-poster">
                        <img src="/homepage/tirutsava_poster.png" style={{width: "100%"}} />
                    </div>

                    <div className="tirutsava-box "><p className={`tirutsava-title-${currentMode}`}>Events</p></div>
                    <div className="img-class">
                        <img className="images-phone-slider" src="/homepage/games.png" alt="Events"/>
                    </div>
                    <div className="phone-cont-lrn">
                        <div className={`texts-${currentMode}`}>
                            With 30+ events Tirutsava 2021 brings a lot of fun, entertainment and learning. Participate in events and win 
							cool prizes, registration for prefest events is now open. Visit the link below.
                        </div>
                    </div>
                    <div className="btn-box"
                        onClick={() => {
                            props.history.push('/events');
                        }}
                    ><button className="discover-btn">Discover</button></div>

                    <div className="tirutsava-box"><p className={`tirutsava-title-${currentMode}`}>Workshops</p></div>
                    <div className="img-class">
                        <img className="images-phone-slider" src="/homepage/technical2.png" alt="Events"/>
                    </div>
                    <div className="phone-cont-lrn">
                        <div className={`texts-${currentMode}`}>
                            Get informative this Tirutsava with some cool workshops.
                        </div>
                    </div>
                    <div className="btn-box"
                        onClick={() => {
                            props.history.push('/events/workshops');
                        }}
                    ><button className="discover-btn">Discover</button></div>
                    {/* <div className="btn-box"><button className="discover-btn">Discover</button></div> */}

                    <div className="tirutsava-box"><p className={`tirutsava-title-${currentMode}`}>Proshows</p></div>
                    <div className="img-class">
                        <img className="images-phone-slider" src="/homepage/dj.png" alt="Events"/>
                    </div>
                    <div className="phone-cont-lrn">
                        <div className={`texts-${currentMode}`}>
                            Check out the exiting proshows brought to you by Tirutsava 2021.
                        </div>
                    </div>
                    <div className="btn-box"
                        onClick={() => {
                            props.history.push('/proshows');
                        }}
                    ><button className="discover-btn">Discover</button>
                    </div>
                    {/* <div className="btn-box"><button className="discover-btn">Discover</button></div> */}

            </div>
        </React.Fragment>
     );
}
 
export default withRouter(HomepagePhone);