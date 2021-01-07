import React from 'react';
import { MDBMask, MDBView,MDBBtn,MDBIcon } from "mdbreact";
import "./SponsorImage.css"


const SponsorImage=(props)=>{
    return (
        <div className="root-SponsorImage rounded">
        <MDBView hover zoom>
              <img
                src={props.url}
                className="img-fluid SponsorImage rounded"
                alt=""
              />
              
              <MDBMask className="mask-SponsorImage" overlay="black-strong">
                <a className="font-weight-bold email-SponsorImage" href={"mailto:meersameed@gmail.com"}
                target="_blank" >
                <MDBIcon  size="sm"  icon="envelope" />  meersameed@gmail.com
                </a>

                <p className="font-weight-bold email-SponsorImage"  >
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
        <h4 className="font-weight-bold my-4 name-SponsorImage " >
            {props.name}
        </h4>
        <h6 className="text-uppercase position-SponsorImage mb-3" >{props.position}</h6>
      </div>
    )
}

export default SponsorImage;