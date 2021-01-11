import { useSpring, animated } from 'react-spring';
import React, { useState, useEffect } from 'react'
import './Homepage.css'
import HomepagePhone from '../../components/HomepagePhone/homepage.phone';
import SideDrawer from '../../components/navbar/SideDrawer';
import Burger from '../../components/navbar/Burger';
import NavbarNew from './Navbar/Navbarnew';


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`


export default function Homepage() {
	var [imgname, setimg] = useState("headphone.png")
	var [eventdet, setevent] = useState("Music")
	var [boolhome, setboolhome] = useState(true)
	var [boolevents, setboolevents] = useState(false)
	var [boolproshows, setboolproshows] = useState(false)

	var onClickHome = () => {
		setimg("headphone.png")
		setevent("Music")
		setboolhome(true)
		setboolevents(false)
		setboolproshows(false)
	}

	var onClickEvents = () => {
		setimg("technical2.png")
		setevent("Technical")
		setboolevents(true)
		setboolhome(false)
		setboolproshows(false)
	}

	var onClickProshows = () => {
		setimg("games.png")
		setevent("Online")
		setboolproshows(true)
		setboolhome(false)
		setboolevents(false)
	}

	const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 950, friction: 140 } }))

	var currentMode = !((new Date()).getHours() < 18 &&
		(new Date()).getHours() >= 6) ?
		'day-mode' :
		'night-mode'

	var width = window.innerWidth;
	var [width, setwidth] = useState(window.innerWidth)
	const handleresize = () => {
		setwidth(window.innerWidth)

	}

	useEffect(() => {
		window.addEventListener('resize', handleresize)
	}, [])
	console.log("width", width)

	var newwidth;

	if (width <= 1064) {
		newwidth = 0.50 * width
	}

	if (width > 1064 && width < 1154) {
		newwidth = 0.47 * width
	}

	if (width > 1154 && width < 1166) {
		newwidth = 0.45 * width
	}

	if (width > 1400) {
		newwidth = 0.35 * width
	}

	let mainPage = (
		<div className="homepage-animate">
			<div className="col-sm-6 hm">
				<div className="cont-home">
					<div className={`head-home-${currentMode}`}>TIRUTSAVA</div>
				</div>
			</div>
		</div>
	);

	if (boolevents) {
		mainPage = (
			<div className="events-animate">
				<div className="col-sm-6 hm">
					<div className="cont-home">
						<div className={`head-home-${currentMode}`}>Events</div>
						<div className={`head-home-cont-${currentMode}`}>text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </div>
						<div className="discover-btn">
							Discover
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (boolproshows) {
		mainPage = (
			<div className="proshows-animate">
				<div className="col-sm-6 hm">
					<div className="cont-home">
						<div className={`head-home-${currentMode}`}>Proshows</div>
						<div className={`head-home-cont-${currentMode}`}>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </div>
						<div className="discover-btn">
							Discover
						</div>
					</div>
				</div>
			</div>
		);
	}

	const [fullNavBar, setFullNavBar] = useState(false);


	var inpx = Math.floor(newwidth)
	console.log(inpx)
	return (
		<div className="whole-home">
			

			<div className="desktop-screen">
				
	

				<div className="navbar-section"><NavbarNew></NavbarNew></div>
				<div className={`home-whole-${currentMode}`}>
					<div className="Auto-swipe row">

						<div className="circle-row"><div className={`circle-${currentMode}`} style={{ width: inpx, height: inpx }}></div></div>
						{mainPage}

						<div className="col-sm-6 evn">

							<div className="cont-event" style={fullNavBar? {zIndex: 1}: {}}>
								{boolhome ? <div className="img-animate"><animated.img className="music-img img-animate" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} style={{ transform: props.xy.interpolate(trans1) }} src={imgname}></animated.img></div> : null}
								{boolevents ? <div className="img-animate"><animated.img className="technical-img img-animate" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} style={{ transform: props.xy.interpolate(trans1) }} src={imgname}></animated.img></div> : null}
								{boolproshows ? <div className="img-animate"><animated.img className="online-img img-animate" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} style={{ transform: props.xy.interpolate(trans1) }} src={imgname}></animated.img></div> : null}
								<div className={`event-detail-${currentMode}`} style={{ opacity: 0 }}>{eventdet}</div>

								<div className="logo-social">
									<i class={`fa fas-${currentMode} fa-facebook`} aria-hidden="true"></i>
									<i class={`fa fas-${currentMode} fa-instagram`} aria-hidden="true"></i>
									<i class={`fa fas-${currentMode} fa-twitter`} aria-hidden="true"></i>
									<i class={`fa fas-${currentMode} fa-youtube`} aria-hidden="true"></i>
								</div>


							</div>
						</div>

					</div>

					<div className="bottom-nav">
						<div className={boolhome ? "bottom-nav-btn bottom-nav-active" : "bottom-nav-btn"} onClick={onClickHome}>
							Tirutsava 2021
						</div>
						<div className={boolevents ? "bottom-nav-btn bottom-nav-active" : "bottom-nav-btn"} onClick={onClickEvents}>
							Events
						</div>
						<div className={boolproshows ? "bottom-nav-btn bottom-nav-active" : "bottom-nav-btn"} onClick={onClickProshows}>
							Proshows
						</div>

						<div className="bottom-nav-btn">
							Live Now
						</div>
					</div>

				</div>
			</div>
			<div className="phone-screen"><HomepagePhone></HomepagePhone></div>
		</div>

	)
}
