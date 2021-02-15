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
                <a className="font-weight-bold email-SponsorImage" href={props.href}
                target="_blank" >
                <MDBIcon  size="sm"  icon="link" />{props.href}
                </a>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              </div>
              
              
              </MDBMask>
        </MDBView>
        <h4 className="font-weight-bold my-4 name-SponsorImage " >
            {props.name}
        </h4>
      </div>
    )
}

export default SponsorImage;