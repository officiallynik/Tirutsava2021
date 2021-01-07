import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import MemberImage from "./MemberImage/SponsorImage";
import "./SponsorDetail.css"

class SponsorDetail extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5" className="root-SponsorDetail" id={this.props.sectionName}>
        <MDBRow>
            <h1 className="team-name-SponsorDetail">{this.props.sectionName}</h1>
        </MDBRow>
        <MDBRow className="mt-4">
          {/* <MDBCol md="6">
            <MemberImage url="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" name="Mir Sameed Ali" position="head"/>
          </MDBCol>
          <MDBCol md="6">
           <MemberImage name="Tapish Ojha" position="head" url="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"/>
          </MDBCol>
          <MDBCol md="6">
           <MemberImage name="Tapish Ojha" position="head" url="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"/>
          </MDBCol> */}
          TBA
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default SponsorDetail;