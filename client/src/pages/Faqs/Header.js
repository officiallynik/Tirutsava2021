import React from "react";
import Search from "./searchbar/search";

function Header(props) {
	return (
		<header className="faq-bar">
			<div className="faq-header">
				<h1 className="text-center">FAQs</h1>
			</div>
			
			<div className="faq-search">
				<Search handleChange={props.handleChange} />
			</div>

			<div className="faq-ask">
				<div className="faq-ask-btn">
					ASK NEW
				</div>
			</div>

		</header>
	);
}

export default Header;
