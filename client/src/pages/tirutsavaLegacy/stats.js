import React, { Component } from 'react'
import CountUp from 'react-countup';
import './stats.css'
import Hamburger from './Hamburger';

export default class Stats extends Component {
 
    render() {
      
        return (
            <div>
                      <div  className="footer-abouts ">
                        <div className="instats-button"><Hamburger currentpage={this.props.currentPage} Handlehomess={this.props.Handlehome} HandleStatss={this.props.HandleStats} HandleGallerys={this.props.Handlegallery} HandleAfterMovies={this.props.HandleAfterMovie}></Hamburger></div>
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
