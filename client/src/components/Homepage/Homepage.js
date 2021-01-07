import { useSpring ,animated } from 'react-spring';
import React,  { useState } from 'react'
import './Homepage.css'
import Music from './Music.js'
import Games from './Games';
import ProgressBar from '../progressBar/progressBar';
import Night from './Night';
import Rellax from 'rellax';
var rellax = new Rellax('.rellax');

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`


export default function Homepage (){
    var [imgname,setimg] = useState("headphone.png")
var [eventdet,setevent] =useState("Music")
var [boolmusic,setboolmusic] = useState(true)
var [booltechnology,setbooltechnology] = useState(false)
var [boolonline,setonline] = useState(false)


var onClickHead = () => {
    setimg("headphone.png")
    setevent("Music")
    setboolmusic(true)
    setbooltechnology(false)
    setonline(false)
}

var onClickTechnology = () => {
   setimg("technical2.png")
   setevent("Technical")
   setbooltechnology(true)
   setboolmusic(false)
   setonline(false)
}

var onClickOnline = () => {
    setimg("games.png")
    setevent("Online")
   setonline(true)
   setboolmusic(false)
   setbooltechnology(false)
}

const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 950, friction: 140}}))

var currentMode = ((new Date()).getHours() < 18 &&
(new Date()).getHours() >= 6) ? 
'day-mode' : 
'night-mode'

console.log("crntmode",currentMode)
     return (
            <div className={`home-whole-${currentMode}`}> 
                <div className="Auto-swipe row">
                    <div className={`circle-${currentMode}`}></div>
                    <div className="col-sm-6 hm">
                        <div className="cont-home">
                            <div className={`head-home-${currentMode}`}>Tirutsava</div>
                            <div className={`head-home-cont-${currentMode}`}>text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </div>
                            <div className="home-btn">
                                <p>Learn More</p></div>
                        </div>
                    </div>
                    <div className="col-sm-6 evn">
                       
                        <div className="cont-event"> 
                        <animated.img onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} style={{ transform: props.xy.interpolate(trans1) }} src={imgname}></animated.img>
                        <div className={`event-detail-${currentMode}`}>{eventdet}</div>
                        <div className="logo-social">
                        <i class={`fa fas-${currentMode} fa-facebook`} aria-hidden="true"></i>
                        <i class={`fa fas-${currentMode} fa-instagram`} aria-hidden="true"></i>
                        <i class={`fa fas-${currentMode} fa-twitter`} aria-hidden="true"></i>
                        <i class={`fa fas-${currentMode} fa-youtube`} aria-hidden="true"></i>
                        <div className="live-home">
         <div className="sig-l-home">
       <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#ff073a" class="bi bi-wifi" viewBox="0 0 16 16">
  <path d="M15.385 6.115a.485.485 0 0 0-.048-.736A12.443 12.443 0 0 0 8 3 12.44 12.44 0 0 0 .663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.717 2.164.204.148.489.13.668-.049z"/>
  <path d="M13.229 8.271c.216-.216.194-.578-.063-.745A9.456 9.456 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.577 1.336c.205.132.48.108.652-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.472 6.472 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.408.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.611-.091l.015-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .708 0l.707-.707z"/>
</svg></div>
         <div className="sig-home"></div>
        <div className="sig-r-home">       <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#ff073a" class="bi bi-wifi" viewBox="0 0 16 16">
  <path d="M15.385 6.115a.485.485 0 0 0-.048-.736A12.443 12.443 0 0 0 8 3 12.44 12.44 0 0 0 .663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.717 2.164.204.148.489.13.668-.049z"/>
  <path d="M13.229 8.271c.216-.216.194-.578-.063-.745A9.456 9.456 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.577 1.336c.205.132.48.108.652-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.472 6.472 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.408.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.611-.091l.015-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .708 0l.707-.707z"/>
</svg></div>
         
       </div>
                        </div>
                        </div>
                    </div>

                </div>
                <div className="change-img">
                    <div className={boolmusic ? "headphone cm active" : "headphone cm"} onClick={onClickHead}>
                        <img src="http://www.simpleimageresizer.com/_uploads/photos/13878ad4/headphone_80x80.png"></img>
                        {boolmusic ? <div className={`shadow-${currentMode}`}></div> : null}
                        </div>
                    <div className={booltechnology ? "technical cm active" : "technical cm"} onClick={onClickTechnology}>
                        <img src="http://www.simpleimageresizer.com/_uploads/photos/13878ad4/technical2_80x80.png"></img>
                        {booltechnology ? <div className={`shadow-${currentMode}`}></div> : null}
                        </div>
                    <div className={boolonline ? "online cm active" : "online cm"} onClick={onClickOnline}>
                        <img src="http://www.simpleimageresizer.com/_uploads/photos/13878ad4/games_80x80.png"></img>
                        {boolonline ? <div className={`shadow-${currentMode}`}></div> : null}
                        </div>
                </div>
            </div>
        )
    
}
