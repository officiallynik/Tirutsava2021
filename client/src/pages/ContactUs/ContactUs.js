import React from "react";
import "./ContactUs.css"
import Scrollspy from 'react-scrollspy'
import { Link, animateScroll as scroll } from "react-scroll";
import { MDBContainer,MDBListGroup, MDBListGroupItem, MDBRow, MDBCol } from "mdbreact";
import TeamDetails from "./TeamDetails/TeamDetails";


class ContactUs extends React.Component {

  LinkConfig={
    spy:true,
    activeClass:'active-ContactUs',
    className:'team-name-ContactUs',
    smooth:true,
    offset:-70,
    duration:1000,
  }

render() {
  return (
    <>
      <MDBRow>
        
        <MDBCol lg="5" >
          <div className="scroll-spy-ContactUs">

            <h1 className="team-heading-ContactUs">MEET THE TEAM</h1>
            
          <MDBListGroup style={{width:"100%"}}>
          
            

            <Link to="SPONSORSHIP" {...this.LinkConfig}>SPONSORSHIP</Link>
            <Link to="MARKETING" {...this.LinkConfig}>MARKETING</Link>
            <Link to="EVENT MANAGEMENT" {...this.LinkConfig}>EVENT MANAGEMENT</Link>
            <Link to="CREATIVE" {...this.LinkConfig}>CREATIVE</Link>
            <Link to="HOSPITALITY" {...this.LinkConfig}>HOSPITALITY</Link>
            <Link to="CONTENT DEVELOPMENT" {...this.LinkConfig}>CONTENT DEVELOPMENT</Link>
            <Link to="SECURITY" {...this.LinkConfig}>SECURITY</Link>

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
            
        <div >
            
            <TeamDetails sectionName="SPONSORSHIP"/>
            <TeamDetails sectionName="MARKETING"/>
            <TeamDetails sectionName="EVENT MANAGEMENT"/>
            <TeamDetails sectionName="CREATIVE"/>
            <TeamDetails sectionName="HOSPITALITY"/>
            <TeamDetails sectionName="CONTENT DEVELOPMENT"/>
            <TeamDetails sectionName="SECURITY"/>
            


            
          </div>
        </MDBCol>
      </MDBRow>
      <div style={{height:"30vh",width:"100%"}}></div>
      </>
    
    );
  }
}

export default ContactUs;