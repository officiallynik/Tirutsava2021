import React from "react";
import "./ContactUs.css"
import Scrollspy from 'react-scrollspy'
import { Link, animateScroll as scroll } from "react-scroll";
import { MDBContainer, MDBListGroup, MDBListGroupItem, MDBRow, MDBCol } from "mdbreact";
import TeamDetails from "./TeamDetails/TeamDetails";


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
		return (
			<div style={{overflowY: "hidden"}}>
				<MDBRow>

					<MDBCol lg="5" >
						<div className="scroll-spy-ContactUs">

							<h1 className="team-heading-ContactUs">MEET THE TEAM</h1>

							<MDBListGroup style={{ width: "100%" }}>

								<Link to="FEST HEADS" {...this.LinkConfig}>FEST HEADS</Link>
								<Link to="CONTENT DEVELOPMENT" {...this.LinkConfig}>CONTENT DEVELOPMENT</Link>
								<Link to="EVENT MANAGEMENT" {...this.LinkConfig}>EVENT MANAGEMENT</Link>
								<Link to="GRAPHICS AND DESIGN" {...this.LinkConfig}>GRAPHICS AND DESIGN</Link>
								<Link to="MARKETING" {...this.LinkConfig}>MARKETING</Link>
								<Link to="SPONSORSHIP" {...this.LinkConfig}>SPONSORSHIP</Link>
								<Link to="WEB DEVELOPMENT" {...this.LinkConfig}>WEB DEVELOPMENT</Link>

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

							<TeamDetails sectionName="FEST HEADS" />
							<TeamDetails sectionName="CONTENT DEVELOPMENT" />
							<TeamDetails sectionName="EVENT MANAGEMENT" />
							<TeamDetails sectionName="GRAPHICS AND DESIGN" />
							<TeamDetails sectionName="MARKETING" />
							<TeamDetails sectionName="SPONSORSHIP" />
							<TeamDetails sectionName="WEB DEVELOPMENT" />

						</div>
					</MDBCol>
				</MDBRow>
				<div style={{ height: "30vh", width: "100%" }}></div>
			</div>

		);
	}
}

export default ContactUs;