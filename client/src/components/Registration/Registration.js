import React, { Component } from 'react';
import GoogleButton from 'react-google-button';
import "./Registration.css";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBNotification } from 'mdbreact';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import config from '../../config/keys';
import axios from 'axios';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import list from './list';
// import DateFnsUtils from '@date-io/date-fns';
import { Button } from 'react-bootstrap';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

class Registration extends Component {

	state = {
		modal: false,
		isRegistration: false,
		state: null,
		city: null,
		institute: null,
		gender: null,
		dob: null,
		googleId: null,
		tokenId: null,
		age: null,
		loading: false,
		phone: null
	};

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	}

	responseGoogleSuccess = (res) => {
		// console.log(res);

		this.setState({
			googleId: res.googleId,
			tokenId: res.tokenId
		})

		axios.post("/api/auth/login", {
			tokenId: res.tokenId,
			googleId: res.googleId
		})
			.then(res => {
				// console.log(res);
				if (res.data.newUser) {
					this.setState({
						isRegistration: true
					});
				}
				else {
					// console.log(res.data);
					this.props.authSuccessCallback(this.state.tokenId, this.state.googleId);
					this.setState({
						modal: false
					});
					// alert("Logged In Successfully");
					this.props.notifyAction("Log In Successful", 3, "success");
				}
			})
			.catch(err => {
				// console.log(err);
				this.props.notifyAction("Log In Unsuccessful", 3, "warning");
			})
			.finally(() => {
				this.setState({
					loading: false
				})
			})
	}

	responseGoogleFailure = (err) => {
		// console.log(err);
		this.setState({
			loading: false
		})
		this.props.notifyAction("Log In Unsuccessful", 3, "warning");
	}

	handleRegistration = () => {
		this.setState({
			loading: true
		});
		const data = {
			googleId: this.state.googleId,
			age: this.state.age,
			institute: this.state.institute,
			city: this.state.city,
			state: this.state.state,
			phone: this.state.phone,
			gender: this.state.gender
		}
		console.log(data);
		axios.post("/api/auth/register", data)
			.then(res => {
				console.log(res);
				this.props.authSuccessCallback(this.state.tokenId, this.state.googleId);
				this.setState({
					modal: false
				});
				// alert("Logged In Successfully");
				this.props.notifyAction("Log In Successful", 3, "success");
			})
			.catch(err => {
				// console.log(err);
				this.props.notifyAction("Registration Unsuccessful", 3, "warning");
			})
			.finally(() => {
				this.setState({
					loading: false
				})
			})
	}

	loginArea = (
		<MDBModalBody>
			<div className="modal-body-registration">
				<p className="secondary-Heading-registration">Sign in with your Google account to access all the goodies!</p>

				<GoogleLogin
					clientId={config.googleClientID}
					render={renderProps => (
						<GoogleButton
							className="google-Button-registration"
							onClick={() => {
								this.setState({
									loading: true
								});
								renderProps.onClick();
							}}
							disabled={renderProps.disabled}
						/>
					)}
					onSuccess={this.responseGoogleSuccess}
					onFailure={this.responseGoogleFailure}
					cookiePolicy={'single_host_origin'}
				/>

			</div>
		</MDBModalBody>
	);

	onStateChange = (event, values) => {
		// console.log(values);
		this.setState({
			state: values
		})
	}

	onCityChange = (event, values) => {
		// console.log(values);
		this.setState({
			city: values
		})
	}

	onInstituteChange = (event) => {
		// console.log(values);
		this.setState({
			institute: event.target.value
		})
	}

	handleLogoutSuccess = (res) => {
		// console.log(res);
		this.props.authLogoutCallback();
		// alert("Logout successfull");
		this.props.notifyAction("Log Out Successful", 3, "success");
	}

	handleLogoutFailure = (err) => {
		// console.log(err);
		this.props.notifyAction("Log Out Unsuccessful", 3, "warning");
	}

	render() {
		if (this.state.isRegistration) {
			this.loginArea = (
				<MDBModalBody>
					<div className="modal-body-registration">
						<p className="secondary-Heading-registration">Looks like it's your first time here, we need more info.</p>

						<MDBContainer>

							<div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

								<div style={{ display: "flex", flexDirection: "row" }}>
									<div style={{ flex: 2 }}>
										<TextField
											label="Phone Number"
											variant="outlined"
											required
											onChange={e => {
												this.setState({
													phone: e.target.value
												})
											}}
											type="number"
										/>
									</div>

									<div style={{ width: "5px", height: "100%" }}></div>

									<div style={{ flex: 1 }}>
										<select className="browser-default custom-select" style={{ height: "100%", fontFamily: "sans-serif" }}
											onChange={e => {
												if (e.target.value === "Gender") {
													this.setState({
														gender: null
													})
												}
												else {
													this.setState({
														gender: e.target.value
													})
												}
											}}
										>
											<option value={null}>Gender</option>
											<option value="male">Male</option>
											<option value="female">Female</option>
											<option value="other">Other</option>
										</select>
									</div>

								</div>

								<div style={{ width: "100%", height: "10px" }}></div>

								<Autocomplete
									id="state"
									options={list.state_india}
									getOptionLabel={(option) => option}
									style={{ width: 300 }}
									renderInput={(params) => <TextField {...params} label="State" variant="outlined" />}
									onChange={this.onStateChange}
								/>

								<div style={{ width: "100%", height: "10px" }}></div>

								<Autocomplete
									disabled={!this.state.state}
									id="city"
									options={list.city_state[this.state.state]}
									getOptionLabel={(option) => option}
									style={{ width: 300 }}
									renderInput={(params) => <TextField {...params} label="City" variant="outlined" />}
									onChange={this.onCityChange}
								/>

								<div style={{ width: "100%", height: "10px" }}></div>

								<TextField
									disabled={!this.state.city}
									label="Institute"
									id="institute"
									onChange={this.onInstituteChange}
									variant="outlined"
									fullWidth
									required
								/>

								<div style={{ width: "100%", height: "10px" }}></div>

								<TextField
									label="Age"
									variant="outlined"
									required
									onChange={e => {
										this.setState({
											age: e.target.value
										})
									}}
									type="number"
									fullWidth
								/>

								<div style={{ width: "100%", height: "10px" }}></div>

								<Button
									onClick={this.handleRegistration}
									disabled={!this.state.city || !this.state.age || !this.state.gender || !this.state.phone || !this.state.institute || !this.state.state}
								>
									Register
								</Button>

							</div>


						</MDBContainer>

					</div>
				</MDBModalBody>
			);
		}

		return (
			<div>
				{
					!this.props.isAuthenticated ?
						<>
							<div onClick={this.toggle}>{this.props.btnLogin}</div>
							<MDBContainer >
								{/* BUTTON */}
								{/* MODAL */}
								<MDBModal className="registration" isOpen={this.state.modal} toggle={this.toggle}    >
									<MDBModalHeader toggle={this.toggle}>

										<img className="logo-registration" src="/logo/tirutsava_big.png" />
										{/* <h5 className="signIn-Heading-registration">Sign In to Tirutsava Brand</h5> */}
									</MDBModalHeader>

									{
										this.state.loading?
										<div>
											<div className="spinner-border text-primary" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
										</div>:
										this.loginArea
									}


									{/* <MDBModalFooter>
					<MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
					<MDBBtn color="primary">Save changes</MDBBtn>
				</MDBModalFooter> */}
								</MDBModal>
							</MDBContainer>
						</> :
						<GoogleLogout
							clientId={config.googleClientID}
							render={renderProps => (
								<div disabled={renderProps.disabled} onClick={renderProps.onClick}>
									{this.props.btnLogout}
								</div>
							)}
							buttonText="Logout"
							onLogoutSuccess={this.handleLogoutSuccess}
							onFailure={this.handleLogoutFailure}
						/>
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.tokenId !== null
	}
}

const mapDispatchToProps = dispatch => {
	return {
		authSuccessCallback: (tokenId, googleId) => dispatch(actions.authSuccess(tokenId, googleId)),
		authLogoutCallback: () => dispatch(actions.logout()),
		notifyAction: (msg, exp, notifyType) => dispatch(actions.notifyAction(msg, exp, notifyType))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);