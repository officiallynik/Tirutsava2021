import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./SponsorDetail.css"
import MemberImage from './MemberImage/SponsorImage';

class SponsorDetail extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5" className="root-SponsorDetail" id={this.props.sectionName}>
        <MDBRow>
            <h1 className="team-name-SponsorDetail">{this.props.sectionName}</h1>
        </MDBRow>

        {/* <MDBRow className="mt-4">
          <MDBCol md="6">
            <MemberImage url="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" name="Amar Raja"/>
          </MDBCol>
        </MDBRow> */}
        TBA
      </MDBContainer>
    );
  }
}

export default SponsorDetail;