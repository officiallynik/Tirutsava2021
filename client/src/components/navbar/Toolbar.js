import React from "react";
import { Link } from "react-router-dom";
import Registration from "../Registration/Registration";
import Burger from "./Burger";
import "./Toolbar.css";

const Toolbar = props => (
	<div className="toolbar">
		<nav className="toolbar__navigation">

			<div className="toolbar__logo">
				<a className="navbar-brand" href="/">
					<img
						src="/logo/tirutsava_logo.png"
						style={{ height: "100%", width: "324px" }}
						alt="Tirutsava Logo"
					/>
				</a>
			</div>

			<div className="toolbar_navigation-items hidden-nav">
				<ul id="navit">
					<li>
						<Link to="/proshows">PROSHOWS</Link>
					</li>
					<li>
						<Link to="/events">EVENTS</Link>
					</li>
					<li>
						<Link to="/contactus">CONTACT US</Link>
					</li>
					<li>
						<Link to="/sponsors">SPONSORS</Link>
					</li>
					<li>
						<Link to="/faqs">FAQs</Link>
					</li>
					<Registration
						btn={
							<li>
								<Link to="#">LOGIN</Link>
							</li>
						}
					/>
				</ul>
			</div>

			<div className="toolbar__toggle-button">
				<Burger click={props.drawer} xbtn={props.xbtn} />
			</div>

			<div className="login__toggle-button toolbar_navigation-items">
				<Registration
					btn={
						<li>
							<Link to="#">LOGIN</Link>
						</li>
					}
				/>
			</div>

		</nav>
	</div>
);

export default Toolbar;
