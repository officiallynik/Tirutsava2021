import React, { Component } from 'react'
import './Year2019mobile.css'
import Newgallery from './../Newgallery';
import Stats from './../stats';
import Movieafter from './../Movieafter';
export default class Year2019mobile extends Component {
    render() {
        return (
            <div className="year-2019-mobile" style={this.props.currentMode==="day-mode" ? {backgroundColor:"#26e0fc"} : {backgroundColor:"#1e1534"}}>
                <div className="mobile-year-head">
                    <div className="mobile-head-line">
                        <div className="mobile-line-color"></div>
                    </div>
                    <div className={`mobile-head-name ${this.props.currentMode}`}>2019</div>
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
