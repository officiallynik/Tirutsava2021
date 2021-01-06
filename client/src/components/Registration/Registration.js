import React, { Component } from 'react';
import "./Registration.css"
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class Registration extends Component {
  state = {
    modal: true
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <MDBContainer >
        {/* BUTTON */}
        <MDBBtn color="info" onClick={this.toggle}>Click</MDBBtn>
        {/* MODAL */}
        <MDBModal className="registration" isOpen={this.state.modal} toggle={this.toggle}    >
          <MDBModalHeader toggle={this.toggle}>
            <h5 className="signIn-Heading-registration">Sign in to Tirutsava Brand</h5>
            </MDBModalHeader>
          <MDBModalBody>
            <p className="secondary-Heading-registration">Log in with your Google account to access all the goodies</p>
          </MDBModalBody>
          {/* <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter> */}
        </MDBModal>
      </MDBContainer>
    );
  }
}
export default Registration;