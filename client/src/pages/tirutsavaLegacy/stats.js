import React, { Component } from 'react'
import CountUp from 'react-countup';
import './stats.css';

export default class Stats extends Component {
 
    render() {
      
        return (
            <div>
                      <div  className="footer-abouts ">
                       
        <div className="events ">
          <div className="events-gif"><img src="https://media.giphy.com/media/fxTqfhCjfQC03qBVch/giphy.gif"></img></div>
          <div className="events-heading">
            <p>Footfall</p>
            <div className="events-count"><CountUp end={6000} ></CountUp></div>
          </div>
        </div>
        <div className="events ">
          <div className="events-gif"><img src="https://media.giphy.com/media/xUOxeUYoeKFwHZZ6AE/giphy.gif"></img></div>
          <div className="events-heading">
            <p>Events</p>
            <div className="events-count"><CountUp end={30} ></CountUp></div>
          </div>
        </div>
        <div className="events ">
          <div className="events-gif-prize"><img src="https://media.giphy.com/media/dz7Yi6w84CV6OVd5LT/giphy.gif"></img></div>
          <div className="events-heading">
            <p>Prizes</p>
            <div className="events-count">
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
