import React, { Component } from 'react'
import './Music.css'
import {motion} from 'framer-motion';

export default class Music extends Component {
    render() {
        return (
            <div className="music-whole">
                <div className="icon-1"><motion.img  animate={{x:'20%'} }src="dj.png"></motion.img></div>
                <div className="text"><div className="cont-text">Music</div></div>
                <div className="icon-2"><img src="headphone.png"></img></div>               
            </div>
        )
    }
}
