import React, { useEffect, useState } from 'react';
import MerchForm from './Form';
import './Merch.css';
import MerchPreview from './Preview';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import url from 'url';
import { Button } from 'react-bootstrap';

const MerchPage = (props) => {

    const [hoodieSize, setHoodieSize] = useState(null);
    const [addr, setAddr] = useState(null);
    const [pincode, setPincode] = useState(null);

    const [openConfirmation, setOpenConfirmation] = useState(false);
    const [openPaymentSuccess, setOpenPaymentSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleConfirmation = () => {
        setLoading(true);
        axios.post(`/api/merch/buymerch/${props.tokenId}/${props.googleId}`, {
            address: addr,
            hoodieSize,
            pincode
        }).then(res => {
            console.log(res.data);
            if(res.data.redirectUrl) {
                window.location.href = res.data.redirectUrl
            }
        })
            .catch(err => {
                // console.log(err);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    useEffect(() => {
        const url_parts = url.parse(window.location.href, true),
            query = url_parts.query;

        if (query.payment_id) {
            setOpenPaymentSuccess(true);
        }
    }, []);

    const paymentSuccessModal = (
        <MDBContainer>
            <MDBModal className="registration" isOpen={openPaymentSuccess} toggle={() => {
                props.history.replace({
                    search: "",
                });
                setOpenPaymentSuccess(false);
            }}>
                <MDBModalHeader toggle={() => {
                    props.history.replace({
                        search: "",
                    });
                    setOpenPaymentSuccess(false);
                }}>
                    <img className="logo-registration" src="/logo/tirutsava_big.png" />
                </MDBModalHeader>

                <MDBModalBody>
                    <div className="registration__success">
                        Successfully Purchased Merchandise
                    </div>
                </MDBModalBody>

            </MDBModal>
        </MDBContainer>
    );

    const confirmMerchandise = (
        <MDBContainer>
            <MDBModal className="registration"
                isOpen={openConfirmation}
                toggle={() => {
                    setOpenConfirmation(false);
                }}
            >
                <MDBModalHeader
                    toggle={() => {
                        setOpenConfirmation(false);
                    }}
                >
                    <img className="logo-registration" src="/logo/tirutsava_big.png" />
                </MDBModalHeader>

                <MDBModalBody>
                    <div className="registration__success">
                        Confirmation for Merchandise Purchase
                    </div>
                    <div style={{ color: "black" }}>
                        Note: Please wait for redirect to this page after payment
                    </div>
                    {
                        loading ?
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div> :
                            <div>
                                <Button
                                    onClick={() => {
                                        handleConfirmation();
                                    }}
                                >Confirm</Button>
                                <Button
                                    onClick={() => {
                                        setOpenConfirmation(false);
                                    }}
                                >Cancel</Button>
                            </div>
                    }
                </MDBModalBody>

            </MDBModal>
        </MDBContainer>
    );

    return (
        <div>
            {confirmMerchandise}
            {paymentSuccessModal}

            <div className="merch-page">
                <div className="merch__preview">
                    <MerchPreview />
                </div>
                <div className="merch__form">
                    <MerchForm
                        handleConfirmation={() => {
                            if (!props.tokenId || !props.googleId) {
                                // props.notifyAction("login to register", 3, "warning");
                                props.authPopup();
                            }
                            else {
                                setOpenConfirmation(true);
                            }
                        }}
                        setHoodieSize={setHoodieSize}
                        setAddr={setAddr}
                        setPincode={setPincode}
                        disabled={!addr || !pincode || !hoodieSize}
                    />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        tokenId: state.auth.tokenId,
        googleId: state.auth.googleId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        notifyAction: (msg, exp, type) => dispatch(actions.notifyAction(msg, exp, type)),
        authPopup: () => dispatch(actions.authPopup()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MerchPage));