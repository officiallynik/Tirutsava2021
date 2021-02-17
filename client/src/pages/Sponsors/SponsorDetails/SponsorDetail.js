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

        {/* <MDBRow className="mt-4"> */}
          {

            this.props.sponsors.map((sponsor, i) => {
              return (
                <MDBCol md="6" key={i}>
                  <MemberImage {...sponsor} />
                </MDBCol>			
              );
            })
          }
        {/* </MDBRow> */}

        {
          this.props.sponsors.length === 0?
          "TBA": null
        }
        {/* TBA */}
      </MDBContainer>
    );
  }
}

export default SponsorDetail;