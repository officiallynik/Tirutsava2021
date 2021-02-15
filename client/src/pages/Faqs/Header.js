import React from "react";
import Search from "./searchbar/search";

function Header(props) {
	var currentMode = ((new Date()).getHours() < 18 &&
		(new Date()).getHours() >= 6) ?
		'day-mode' :
		'night-mode';
	// var currentMode = 'day-mode';
	return (
		<header className={`faq-bar-${currentMode}`}>
			<div className="faq-header">
				<h1 className={`text-center ${currentMode}`}>FAQs</h1>
			</div>
			
			<div className="faq-search">
				<Search handleChange={props.handleChange} />
			</div>

			<div className="faq-ask">
				<div className="faq-ask-btn">
				</div>
			</div>

		</header>
	);
}

export default Header;
