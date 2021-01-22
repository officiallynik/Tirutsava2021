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
                            <form>
                                <p className="h4 text-center py-4">Buy our awesome merch</p>
                                <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                    Hoodie Size
                                </label>
                                <select className="browser-default custom-select" style={{ height: "100%", fontFamily: "sans-serif" }}
                                    onChange={e => {
                                        if (e.target.value === "Size") {
                                            
                                        }
                                        else {
                                            props.setHoodieSize(e.target.value)
                                        }
                                    }}
                                >
                                    <option value={null}>Size</option>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                </select>

                                <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                    Delivery Address
                                </label>
                                <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" 
                                    onChange={e => props.setAddr(e.target.value)}
                                />

                                <label htmlFor="defaultFormLoginPincode" className="grey-text">
                                Pincode
                                </label>
                                <input type="email" id="defaultFormLoginPincode" className="form-control" 
                                    placeholder="Ex. 560001"
                                    onChange={e => props.setPincode(e.target.value)}
                                />

                                <div className="text-center py-4 mt-3">
                                    <MDBBtn className="btn btn-outline-purple" 
                                        onClick={props.handleConfirmation}
                                        disabled={props.disabled}
                                    >
                                        Buy Now
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default MerchForm;