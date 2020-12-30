import React from 'react';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol,MDBBtn,MDBIcon } from "mdbreact";
import "./MemberImage.css"


const MemberImage=(props)=>{
    return (
        <div className="root-MemberImage rounded">
        <MDBView hover zoom>
              <img
                src={props.url}
                className="img-fluid memberImage rounded"
                alt=""
              />
              
              <MDBMask className="mask-MemberImage" overlay="black-strong">
                <a className="font-weight-bold email-MemberImage" href={"mailto:meersameed@gmail.com"}
                target="_blank" >
                <MDBIcon  size="sm"  icon="envelope" />  meersameed@gmail.com
                </a>

                <p className="font-weight-bold email-MemberImage"  >
                <MDBIcon  size="sm"  icon="mobile-alt" />  +91-9129129912
                </p>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <MDBBtn tag="a" floating size="md" className="mx-2 rounded mb-0 btn-fb" href={"https://www.facebook.com/"} target="_blank">
                    <MDBIcon  size="2x" fab icon="facebook-f" />
                </MDBBtn>

                <MDBBtn tag="a" floating size="md" className="mx-2 rounded mb-0 btn-fb" href={"https://www.instagram.com/"} target="_blank">
                    <MDBIcon  size="2x" fab icon="instagram" />
                </MDBBtn>
              </div>
              
              
              </MDBMask>
        </MDBView>
        <h4 className="font-weight-bold my-4 name-MemberImage " >
            {props.name}
        </h4>
        <h6 className="text-uppercase position-MemberImage mb-3" >{props.position}</h6>
      </div>
    )
}

export default MemberImage;