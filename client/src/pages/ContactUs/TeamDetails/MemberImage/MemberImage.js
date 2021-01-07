import React from 'react';
import { MDBMask, MDBView, MDBIcon } from "mdbreact";
import "./MemberImage.css"


const MemberImage=(props)=>{
  // console.log(props)
    return (
        <div className="root-MemberImage rounded">
        <MDBView hover zoom>
              <img
                src={props.url || "/heads/dummy_person.png"}
                className="img-fluid memberImage rounded"
                alt=""
              />
              
              <MDBMask className="mask-MemberImage" overlay="black-strong">
                <a className="font-weight-bold email-MemberImage" href={props.email}
                target="_blank" >
                <MDBIcon  size="sm"  icon="envelope" />  {props.email}
                </a>

                <p className="font-weight-bold email-MemberImage"  >
                <MDBIcon  size="sm"  icon="mobile-alt" />  +91-{props.phone}
                </p>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              </div>
              
              
              </MDBMask>
        </MDBView>
        <h4 className="font-weight-bold my-4 name-MemberImage " >
            {props.name}
        </h4>
      </div>
    )
}

export default MemberImage;