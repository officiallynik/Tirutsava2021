import { useSpring, animated } from 'react-spring';
import React, { useState, useEffect } from 'react'
import './Homepage.css'
import HomepagePhone from '../../components/HomepagePhone/homepage.phone';
import { withRouter } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px, 0, 0)`


const Homepage = props => {
	var [imgname, setimg] = useState("homepage/tirutsava_poster.png")
	var [eventdet, setevent] = useState("Music")
	var [boolhome, setboolhome] = useState(true)
	var [boolevents, setboolevents] = useState(false)
	var [boolproshows, setboolproshows] = useState(false)
	var [boolworkshops, setboolworkshops] = useState(false)

	var onClickHome = () => {
		setimg("/homepage/tirutsava_poster.png")
		setevent("Music")
		setboolhome(true)
		setboolevents(false)
		setboolproshows(false)
		setboolworkshops(false)
	}

	var onClickEvents = () => {
		setimg("/homepage/games.png")
		setevent("Technical")
		setboolevents(true)
		setboolhome(false)
		setboolproshows(false)
		setboolworkshops(false)
	}

	var onClickWorkshops = () => {
		setimg("/homepage/technical2.png")
		setevent("Workshops")
		setboolworkshops(true)
		setboolevents(false)
		setboolhome(false)
		setboolproshows(false)
	}

	var onClickProshows = () => {
		setimg("/homepage/dj.png")
		setevent("Online")
		setboolproshows(true)
		setboolhome(false)
		setboolevents(false)
		setboolworkshops(false)
	}

	const [propsSpring, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 950, friction: 140 } }))

	// var currentMode = ((new Date()).getHours() < 18 &&
	// 	(new Date()).getHours() >= 6) ?
	// 	'day-mode' :
	// 	'night-mode';
	var currentMode = 'day-mode';

	var [width, setwidth] = useState(window.innerWidth)
	const handleresize = () => {
		setwidth(window.innerWidth)

	}

	useEffect(() => {
		window.addEventListener('resize', handleresize)
	}, [])
	// console.log("width", width)

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



	// console.log("zindex",zindex)

	let mainPage = (
		<div className="homepage-animate">
			<div className="img-animate">
				<img 
					src={`city-${currentMode}.png`}
					style={{width: "100%", position: "fixed", bottom: 0, left: 0}}
				/>
			</div>
			<div className="img-animate">
					<animated.img
						onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
						style={{ transform: propsSpring.xy.interpolate(trans1), width: "50%" }}
						src={imgname}>
					</animated.img>
				</div>
		</div>
	);

	if (boolevents) {
		mainPage = (
			<div className="proshows-animate">
				<div className="col-sm-6 hm">
					<div className="cont-home">
						<div className={`head-home-${currentMode} shift-right`}>Events</div>
						<div className={`head-home-cont-${currentMode} shift-right`} style={{ width: "100%", textAlign: "left" }}>
							With 30+ events Tirutsava 2021 brings a lot of fun, entertainment and learning. Participate in events and win
							cool prizes, registration for prefest events is now open. Visit the link below.
						</div>
						<div className={`discover-btn-${currentMode} shift-right`}
							onClick={() => {
								props.history.push("/events")
							}}
						>
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
				<div className="hm">
					<div className="cont-home">
						<div className={`head-home-${currentMode} shift-right`} style={{ width: "100%" }}>Proshows</div>
						<div className={`head-home-cont-${currentMode} shift-right`}>
							<div className="comingsoon__homepage">
								Coming Soon
							</div>
						</div>
						{/* <div className="discover-btn shift-right">
							Discover
						</div> */}
					</div>
				</div>
			</div>
		);
	}

	if (boolworkshops) {
		mainPage = (
			<div className="proshows-animate">
				<div className="hm">
					<div className="cont-home">
						<div className={`head-home-${currentMode} shift-right`}>Workshops</div>
						<div className={`head-home-cont-${currentMode} shift-right`} style={{ width: "100%", textAlign: "left" }}>
							Get informative this Tirutsava with some cool workshops.
						</div>
						<div className={`discover-btn-${currentMode} shift-right`}
							onClick={() => {
								props.history.push("/events/workshops")
							}}
						>
							Discover
						</div>
					</div>
				</div>
			</div>
		);
	}


	var inpx = Math.floor(newwidth)
	// console.log(inpx)
	var [boolshow,] = useState(false)

	var zindex = 20;
	if (boolshow) {
		zindex = 5;
	}
	else {
		zindex = 20;
	}
	return (
		<div className={`whole-home-${currentMode}`}>

			<div className="desktop-screen" style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>

				<div>
					<Navbar isHomePage={true} />
				</div>


				{/* <div className="navbar-section"><NavbarNew boolshownav={boolshow}></NavbarNew></div> */}
				<div className={`home-whole-${currentMode}`}>
					<div className="Auto-swipe row">

						<div className="circle-row"><div className={`circle-${currentMode}`} style={{ width: inpx, height: inpx }}></div></div>
						{mainPage}

						<div className="evn">

							<div className="cont-event" style={{ zIndex: 1 }}>
								{boolevents ? <div className="img-animate">
									<animated.img className="music-img img-animate"
										onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
										style={{ transform: propsSpring.xy.interpolate(trans1) }}
										src={imgname}></animated.img></div> : null}
								{boolproshows ? <div className="img-animate"><animated.img className="online-img img-animate" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} style={{ transform: propsSpring.xy.interpolate(trans1) }} src={imgname}></animated.img></div> : null}
								{boolworkshops ? <div className="img-animate"><animated.img className="online-img img-animate" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} style={{ transform: propsSpring.xy.interpolate(trans1) }} src={imgname}></animated.img></div> : null}
								<div className={`event-detail-${currentMode}`} style={{ opacity: 0 }}>{eventdet}</div>

							</div>
						</div>

					</div>

					<div className="bottom-nav" style={{ zIndex: zindex }}>
						<div className={boolhome ? `bottom-nav-btn bottom-nav-active` : `bottom-nav-btn`} onClick={onClickHome}>
							Tirutsava 2021
						</div>
						<div className={boolevents ? `bottom-nav-btn bottom-nav-active` : `bottom-nav-btn`} onClick={onClickEvents}>
							Events
						</div>
						<div className={boolworkshops ? `bottom-nav-btn bottom-nav-active` : `bottom-nav-btn`} onClick={onClickWorkshops}>
							Workshops
						</div>
						<div className={boolproshows ? `bottom-nav-btn bottom-nav-active` : `bottom-nav-btn`} onClick={onClickProshows}>
							Proshows
						</div>
					</div>
				</div>
			</div>
			<div className="phone-screen"><HomepagePhone></HomepagePhone></div>
		</div>

	)
}

export default withRouter(Homepage);