import React, { Component } from 'react'
import './Music.css'
import {motion} from 'framer-motion';
import { useSpring ,animated } from 'react-spring';


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

function Music() {
    
const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 950, friction: 140}}))
        return (
            <div className="music">
            <div className="music-whole">
                <div className="icon-1" ><animated.img  onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} style={{ transform: props.xy.interpolate(trans1) }} src="headphone.png"></animated.img></div>
                <div className="text"><animated.div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} style={{ transform: props.xy.interpolate(trans1) }}className="cont-text">Music</animated.div></div>
                           
            </div>
            <div className="music-phone-view">
            <div className="phone-icon-1" ><animated.img  onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} style={{ transform: props.xy.interpolate(trans1) }} src="headphone.png"></animated.img></div>
                <div className="phone-text"><animated.div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} style={{ transform: props.xy.interpolate(trans1) }}className="phone-cont-text">Music</animated.div></div>
            </div>
            <div className="music-xs-phone-view">
            <div className="xs-phone-icon-1" ><animated.img  onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} style={{ transform: props.xy.interpolate(trans1) }} src="dj.png"></animated.img></div>
                <div className="xs-phone-text"><animated.div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} style={{ transform: props.xy.interpolate(trans1) }}className="xs-phone-cont-text">Music</animated.div></div>
            </div>
            </div>
       )
}

export default Music
