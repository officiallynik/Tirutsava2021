import React from "react";
import { Link } from "react-router-dom";
import Registration from "../Registration/Registration";
import Burger from "./Burger";
import "./Toolbar.css";
import ReactTooltip from 'react-tooltip';

const Toolbar = props => (
	<div className="toolbar">
		<nav className="toolbar__navigation">

			<div className="toolbar__logo">
				<a className="navbar-brand" href="/">
					<img
						src="/logo/tirutsava_logo.png"
						alt="Tirutsava Logo"
						className="tirutsava__navbar__logo"
					/>
				</a>
			</div>

			<div className="toolbar_navigation-items hidden-nav">
				{
					props.isHomePage ?
						(
							<ul id="navit">
								<li>
									<Link to="/merch">Buy Merch</Link>
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
									btnLogin={
										<li>
											<Link to="#">LOGIN</Link>
										</li>
									}
									btnLogout={
										<li>
											<Link to="#">LOGOUT</Link>
										</li>
									}
								/>
							</ul>
						) :
						(
							<ul id="navit">
								<li>
									<Link data-tip="Coming soon">PROSHOWS</Link>
								</li>
								<li>
									<Link to="/events">EVENTS</Link>
								</li>
								<li>
									<Link to="/merch">Buy Merch</Link>
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
									btnLogin={
										<li>
											<Link to="#">LOGIN</Link>
										</li>
									}
									btnLogout={
										<li>
											<Link to="#">LOGOUT</Link>
										</li>
									}
								/>
							</ul>
						)
				}
			</div>

			<ReactTooltip place="bottom" effect="solid" />

			<div className="toolbar__toggle-button">
				<Burger click={props.drawer} xbtn={props.xbtn} />
			</div>

			<div className="login__toggle-button toolbar_navigation-items">
				<Registration
					btnLogin={
						<li>
							<Link to="#">LOGIN</Link>
						</li>
					}
					btnLogout={
						<li>
							<Link to="#">LOGOUT</Link>
						</li>
					}
				/>
			</div>

		</nav>
	</div>
);

export default Toolbar;
