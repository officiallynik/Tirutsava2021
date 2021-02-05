import React from "react";
import './Merch.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

const MerchForm = props => {
    return (
        <MDBContainer>
            <MDBRow style={{display: "flex", justifyContent: "center"}}>
                <MDBCol md="8">
                    <MDBCard>
                        <MDBCardBody>
                            <div
                                style={{display: "flex", justifyContent: "center", alignItems: "center", color: "black"}}
                            >   
                                No longer available
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default MerchForm;