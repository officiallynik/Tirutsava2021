import React, { Component } from 'react';
import GoogleButton from 'react-google-button';
import "./Registration.css";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class Registration extends Component {
	state = {
		modal: false
	};

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	}
	render() {
		return (
			<div>
				<div onClick={this.toggle}>{this.props.btn}</div>
				<MDBContainer >
					{/* BUTTON */}
					{/* MODAL */}
					<MDBModal className="registration" isOpen={this.state.modal} toggle={this.toggle}    >
						<MDBModalHeader toggle={this.toggle}>

							<img className="logo-registration" src="/logo/tirutsava_big.png" />
							{/* <h5 className="signIn-Heading-registration">Sign In to Tirutsava Brand</h5> */}
						</MDBModalHeader>
						<MDBModalBody>
							<div className="modal-body-registration">
								<p className="secondary-Heading-registration">Sign in with your Google account to access all the goodies!</p>
								<GoogleButton

									className="google-Button-registration"
									onClick={() => { console.log('Google button clicked') }}
								/>
							</div>
						</MDBModalBody>
						{/* <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter> */}
					</MDBModal>
				</MDBContainer>
			</div>
		);
	}
}
export default Registration;