import React from "react";
import "./Sponsors.css"
import { Link } from "react-scroll";
import { MDBListGroup, MDBRow, MDBCol } from "mdbreact";
import TeamDetails from "./SponsorDetails/SponsorDetail";

const Sponsors = () => {

	const LinkConfig = {
		spy: true,
		activeClass: 'active-Sponsors',
		className: 'team-name-Sponsors',
		smooth: true,
		offset: 0,
		duration: 500,
	}

	const partnerslist = (
		<>

			<div className="scroll-partners scroll-partners1">
				{
					Array.from(Array(14), (e, i) => {
						return (
							<div class="scroll-image-div">
								<img class="scroll-image" src={`/sp_2020/p${i + 1}.png`} alt="company logo" />
							</div>
						)
					})
				}
			</div>

			<div className="scroll-partners scroll-partners2">
				{
					Array.from(Array(14), (e, i) => {
						return (
							<div class="scroll-image-div">
								<img class="scroll-image" src={`/sp_2020/p${i + 1}.png`} alt="company logo" />
							</div>
						)
					})
				}
			</div>

		</>
	);

	const sponserslist = (
		<>

			<div className="scroll-sponsors scroll-sponsors1">
				{
					Array.from(Array(13), (e, i) => {
						return (
							<div class="scroll-image-div">
								<img class="scroll-image" src={`/sp_2020/s${i + 1}.png`} alt="company logo" />
							</div>
						)
					})
				}
			</div>

			<div className="scroll-sponsors scroll-sponsors2">
				{
					Array.from(Array(13), (e, i) => {
						return (
							<div class="scroll-image-div">
								<img class="scroll-image" src={`/sp_2020/s${i + 1}.png`} alt="company logo" />
							</div>
						)
					})
				}
			</div>

		</>
	);

	var currentMode = ((new Date()).getHours() < 18 &&
		(new Date()).getHours() >= 6) ?
		'day-mode' :
		'night-mode';
	// var currentMode = 'day-mode';

	return (
		<div>
			<div className={`sponsors-page-${currentMode}`}>
				<MDBRow>

					<MDBCol lg="5" >
						<div className="scroll-spy-Sponsors">

							<h1 className="team-heading-Sponsors">SPONSORS</h1>

							<MDBListGroup style={{ width: "100%" }}>

								<Link to="TITLE SPONSORS" {...LinkConfig} className={`team-name-Sponsors-${currentMode}`} >TITLE SPONSORS</Link>
								<Link to="CO-TITLE SPONSORS" {...LinkConfig} className={`team-name-Sponsors-${currentMode}`} >CO-TITLE SPONSORS</Link>
								<Link to="GOLD SPONSORS" {...LinkConfig} className={`team-name-Sponsors-${currentMode}`} >GOLD SPONSORS</Link>
								<Link to="SILVER SPONSORS" {...LinkConfig} className={`team-name-Sponsors-${currentMode}`} >SILVER SPONSORS</Link>
								<Link to="BRONZE SPONSORS" {...LinkConfig} className={`team-name-Sponsors-${currentMode}`} >BRONZE SPONSORS</Link>
								<Link to="COPPER SPONSORS" {...LinkConfig} className={`team-name-Sponsors-${currentMode}`} >COPPER SPONSORS</Link>
								<Link to="PARTNERS" {...LinkConfig} className={`team-name-Sponsors-${currentMode}`} >PARTNERS</Link>

							</MDBListGroup>
						</div>
					</MDBCol>

					<MDBCol>

						<div>

							<TeamDetails sectionName="TITLE SPONSORS" />
							<TeamDetails sectionName="CO-TITLE SPONSORS" />
							<TeamDetails sectionName="GOLD SPONSORS" />
							<TeamDetails sectionName="SILVER SPONSORS" />
							<TeamDetails sectionName="BRONZE SPONSORS" />
							<TeamDetails sectionName="COPPER SPONSORS" />
							<TeamDetails sectionName="PARTNERS" />

						</div>
					</MDBCol>
				</MDBRow>

				<div style={{ height: "5vh", width: "100%" }}></div>

				<MDBCol className="prev-sponsors">
					<h2 className="prev-sponsors-header">Our Previous Year Sponsors</h2>
					<h4 className="prev-sponsors-subheader">Checkout companies associated with Tirutsava 2020</h4>
					<div className="scroll-main">
						<div className="side-margin-left"></div>

						<div>

							<div className="scroller-div">
								{sponserslist}
							</div>

							<div className="scroller-div">
								{partnerslist}
							</div>

						</div>

						<div className="side-margin-right"></div>
					</div>
				</MDBCol>
			</div>


		</div>
	);
}

export default Sponsors;