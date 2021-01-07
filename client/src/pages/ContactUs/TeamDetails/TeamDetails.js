import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import MemberImage from "./MemberImage/MemberImage";
import "./TeamDetails.css";

const TeamDetails = (props) => {
	return (
		<MDBContainer className="mt-5" className="root-TeamDetails" id={props.sectionName}>
			<MDBRow>
				<h1 className="team-name-TeamDetails">{props.sectionName}</h1>
			</MDBRow>
			<MDBRow className="mt-4">

				{
					props.heads.map((head, i) => {
						return (
							<MDBCol md="6" key={i}>
								<MemberImage {...head} />
							</MDBCol>			
						);
					})
				}
				
			</MDBRow>
		</MDBContainer>
	);
}

export default TeamDetails;