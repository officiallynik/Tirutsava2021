import React, { Component } from 'react'
import CountUp from 'react-countup';
import './stats.css';

export default class Stats extends Component {
 
    render() {
      
        return (
            <div className="stats-whole">
              <div  className="footer-abouts ">                       
                <div className="events">
                  <div className={`events-heading ${this.props.currentMode}`}>
                    <p className="heading-mg">Footfall</p>
                    <div className={`events-count heading-mg ${this.props.currentMode}`}><CountUp end={6000} ></CountUp></div>
                  </div>
                </div>
                <div className="events ">
                  <div className={`events-heading ${this.props.currentMode}`}>
                    <p className="heading-mg">Events</p>
                    <div className={`events-count heading-mg ${this.props.currentMode}`}><CountUp end={30} ></CountUp></div>
                  </div>
                </div>
                <div className="events ">
                  <div className={`events-heading ${this.props.currentMode}`}>
                    <p className="heading-mg">Prizes</p>
                    <div className={`events-count heading-mg ${this.props.currentMode}`}>
                      <CountUp end={200} ></CountUp>
                      K
                      </div>
                  </div>
                </div>
            
              </div>
            </div>
        )
    }
}
