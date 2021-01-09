import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import GoogleLogin from 'react-google-login';
import config from './config/keys';

import Navbar from './components/navbar/Navbar';
import Routes from './Routes';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import { useEffect, useState } from 'react';
import GoogleButton from 'react-google-button';

function App(props) {

	useEffect(() => {
		props.authCheckState();
	}, []);

	const responseGoogleSuccess = (res) => {
		// console.log(res);
		if(!!localStorage.getItem("tokenId")){
			props.autoSignIn(res.tokenId, res.googleId);
		}
	}

	const responseGoogleFailure = (err) => {
		console.log(err);
	}

	let app = (
		<div className="App">
			<div style={{ display: "none" }}>
				<GoogleLogin
					clientId={config.googleClientID}
					render={renderProps => (
						<GoogleButton
							className="google-Button-registration"
							onClick={renderProps.onClick}
							disabled={renderProps.disabled}
						/>
					)}
					isSignedIn={true}
					onSuccess={responseGoogleSuccess}
					onFailure={responseGoogleFailure}
					cookiePolicy={'single_host_origin'}
				/>
			</div>
			<Navbar />
			<Routes />
		</div>
	);

	return app;
}

const mapDispatchToProps = dispatch => {
	return {
		authCheckState: () => dispatch(actions.authCheckState()),
		autoSignIn: (tokenId, googleId) => dispatch(actions.authSuccess(tokenId, googleId))
	};
};

export default withRouter(connect(null, mapDispatchToProps)(App));
