import React from "react";
import "./ContactUs.css";
import { Link } from "react-scroll";
import { MDBListGroup, MDBRow, MDBCol } from "mdbreact";
import TeamDetails from "./TeamDetails/TeamDetails";
import Team from "./Team";

class ContactUs extends React.Component {

	LinkConfig = {
		spy: true,
		activeClass: 'active-ContactUs',
		className: 'team-name-ContactUs',
		smooth: true,
		offset: 0,
		duration: 500,
	}

	render() {
		// var currentMode = ((new Date()).getHours() < 18 &&
		// 	(new Date()).getHours() >= 6) ?
		// 	'day-mode' :
		// 	'night-mode';
		var currentMode = 'night-mode';

		return (
			<div className={`contact-page-main-${currentMode}`}>
				<MDBRow>

					<MDBCol lg="5" >
						<div className="scroll-spy-ContactUs">

							<h1 className="team-heading-ContactUs">MEET THE TEAM</h1>

							<MDBListGroup style={{ width: "100%" }}>

								<Link to="FEST HEADS" {...this.LinkConfig} className={`team-name-ContactUs-${currentMode}`} >FEST HEADS</Link>
								<Link to="CONTENT DEVELOPMENT" {...this.LinkConfig} className={`team-name-ContactUs-${currentMode}`} >CONTENT DEVELOPMENT</Link>
								<Link to="EVENT MANAGEMENT" {...this.LinkConfig} className={`team-name-ContactUs-${currentMode}`} >EVENT MANAGEMENT</Link>
								<Link to="GRAPHICS AND DESIGN" {...this.LinkConfig} className={`team-name-ContactUs-${currentMode}`} >GRAPHICS AND DESIGN</Link>
								<Link to="MARKETING" {...this.LinkConfig} className={`team-name-ContactUs-${currentMode}`} >MARKETING</Link>
								<Link to="SPONSORSHIP" {...this.LinkConfig} className={`team-name-ContactUs-${currentMode}`} >SPONSORSHIP</Link>
								<Link to="WEB DEVELOPMENT" {...this.LinkConfig} className={`team-name-ContactUs-${currentMode}`} >WEB DEVELOPMENT</Link>

								{/* <MDBListGroupItem href="#section1" className="team-name-ContactUs">SPONSORSHIP</MDBListGroupItem> */}
								{/* <MDBListGroupItem href="#section2" className="team-name-ContactUs">EVENT MANAGEMENT</MDBListGroupItem>
									<MDBListGroupItem href="#section3" className="team-name-ContactUs">MARKETING</MDBListGroupItem>
									<MDBListGroupItem href="#section4" className="team-name-ContactUs">CREATIVE</MDBListGroupItem>
									<MDBListGroupItem href="#section5" className="team-name-ContactUs">HOSPITALITY</MDBListGroupItem>
									<MDBListGroupItem href="#section6" className="team-name-ContactUs">CONTENT DEVELOPMENT</MDBListGroupItem>
									<MDBListGroupItem href="#section7" className="team-name-ContactUs">SECURITY</MDBListGroupItem> */}

							</MDBListGroup>
						</div>
					</MDBCol>

					<MDBCol>

						<div>

							<TeamDetails sectionName="FEST HEADS" heads={Team.overall} />
							<TeamDetails sectionName="CONTENT DEVELOPMENT" heads={Team.content} />
							<TeamDetails sectionName="EVENT MANAGEMENT" heads={Team.event} />
							<TeamDetails sectionName="GRAPHICS AND DESIGN" heads={Team.design} />
							<TeamDetails sectionName="MARKETING" heads={Team.marketing} />
							<TeamDetails sectionName="SPONSORSHIP" heads={Team.sponsorship} />
							<TeamDetails sectionName="WEB DEVELOPMENT" heads={Team.web} />

						</div>
					</MDBCol>
				</MDBRow>
				<div style={{ height: "30vh", width: "100%" }}></div>
			</div>

		);
	}
}

export default ContactUs;