import React , {useState} from 'react';
import './homepage.phone.css';
import Navbar from '../navbar/Navbar';
import { withRouter } from 'react-router-dom';
// import NavbarNew from './../../pages/Homepage/Navbar/Navbarnew';
// var currentMode = ((new Date()).getHours() < 18 &&
// (new Date()).getHours() >= 6) ? 
// 'day-mode' : 
// 'night-mode';

var currentMode = "night-mode";


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
            <div className={`phone-body-${currentMode} conatainer-fluid`}>
                {/* <div className="navbar-section"><NavbarNewphone boolshownav={boolshow}></NavbarNewphone></div> */}
                    <div className="tirutsava-poster">
                        <img src="/homepage/tirutsava_poster.png" style={{width: "100%"}} />
                    </div>

                    <div className="tirutsava-box "><p className="tirutsava-title">Events</p></div>
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

                    <div className="tirutsava-box"><p className="tirutsava-title">Workshops</p></div>
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

                    <div className="tirutsava-box"><p className="tirutsava-title">Proshows</p></div>
                    <div className="img-class">
                        <img className="images-phone-slider" src="/homepage/dj.png" alt="Events"/>
                    </div>
                    <div className="phone-cont-lrn">
                        <div className="coming-soon">
                            Coming Soon
                        </div>
                    </div>
                    {/* <div className="btn-box"><button className="discover-btn">Discover</button></div> */}

            </div>
        </React.Fragment>
     );
}
 
export default withRouter(HomepagePhone);