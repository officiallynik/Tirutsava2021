import React, { Component } from 'react'
import './Homepage.css'
import Music from './Music.js'
import Games from './Games';
import ProgressBar from '../progressBar/progressBar';
import Fade from './fade';
export default class Homepage extends Component {
    render() {
        return (
            <div className="home-whole"> 
                <div className="Auto-swipe">
                   {/* <Music></Music>
                    <Games></Games>*
                    {/*<ProgressBar></ProgressBar>*/}
                    <Fade></Fade>

                </div>
            </div>
        )
    }
}
