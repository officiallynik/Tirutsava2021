import React, { Component } from 'react'
import './Year2016mobile.css'
import Newgallery from './../Newgallery';
import Movieafter from './../Movieafter';
import Stats from './../stats';
export default class Year2016mobile extends Component {
    render() {
        return (
            <div className={`year-2016-mobile ${this.props.currentMode}}`}>
                 <div className="mobile-year-head">
                    <div className="mobile-head-line">
                        <div className="mobile-line-color"></div>
                    </div>
                    <div className={`mobile-head-name ${this.props.currentMode}`}>2016</div>
                    <div className="mobile-head-line">
                        <div className="mobile-line-color"></div>
                    </div>
                </div>
                <div className="mobile-year-cont row">
                    <div className="col-md-6 mobile-movie">
                        <div className="mobile-movie-cont">
                            <Movieafter></Movieafter>
                        </div>
                    </div>
                    <div className="col-md-6 mobile-gallery">
                        <div className="mobile-gallery-cont">
                            <Newgallery></Newgallery>
                        </div>
                    </div>  
                </div>
                <div className="mobile-stats-foot">
                    <Stats currentMode={this.props.currentMode}></Stats>
                </div> 
            </div>
        )
    }
}
