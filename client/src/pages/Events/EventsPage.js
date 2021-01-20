import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import { CancelPresentationOutlined } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Event from './Event';
import './EventsPage.css';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import url from 'url';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import { Button } from 'react-bootstrap';

const useStyles = makeStyles({
    root: {
        width: 500,
        backgroundColor: "#1e1534"
    },

    switchTab: {
        width: 500,
        backgroundColor: "transparent"
    }
});

const EventsPage = props => {
    const categories = [
        {
            id: 0,
            type: "Pre Fest",
            vid: "/bg_vid/squares-back-vid.mp4"
        },
        {
            id: 1,
            type: "Workshops",
            vid: "/bg_vid/online-back-vid.mp4"
        },
        {
            id: 2,
            type: "Cultural",
            vid: "/bg_vid/cult-back-vid.mp4"
        },
        {
            id: 3,
            type: "Technical",
            vid: "/bg_vid/tech-back-vid.mp4"
        },
        {
            id: 4,
            type: "Literary",
            vid: "/bg_vid/letters-back-vid.mp4"
        }
    ];

    const [cat, setCat] = useState(0);

    useEffect(() => {
        // console.log(props.history)
        switch (props.history.location.pathname) {
            case "/events/prefest":
                setCat(0);
                break;
            case "/events/workshops":
                setCat(1);
                break;
            case "/events/cultural":
                setCat(2);
                break;
            case "/events/technical":
                setCat(3);
                break;
            case "/events/literary":
                setCat(4);
                break;
            default:
                setCat(0);
                props.history.push("/events/prefest");
        }
    }, [props.history]);

    const classes = useStyles();

    const handleUrl = (newValue) => {
        switch (newValue) {
            case 0:
                props.history.push("/events/prefest");
                break;
            case 1:
                props.history.push("/events/workshops");
                break;
            case 2:
                props.history.push("/events/cultural");
                break;
            case 3:
                props.history.push("/events/technical");
                break;
            case 4:
                props.history.push("/events/literary");
                break;
            default:
                props.history.push("/events/prefest");
        }
    }

    const [viewEvent, setViewEvent] = useState(null);

    const handleClose = () => {
        // console.log("pressed close");
        setViewEvent(null);
    }

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);
    const [registerLoader, setRegisterLoader] = useState(false);
    const [registeredIds, setRegisteredIds] = useState([]);
    const [paymentSuccess, setPaymentSuccess] = useState([false, null]);
    const [registerForId, setRegisterForId] = useState([false, null, null, null]);

    const handleRegister = (eventId, eventNo) => {
        let eventType = "prefest";
        switch (cat) {
            case 0:
                eventType = "prefest";
                break;
            case 1:
                eventType = "workshops";
                break;
            case 2:
                eventType = "cultural";
                break;
            case 3:
                eventType = "technical";
                break;
            case 4:
                eventType = "literary";
                break;
            default:

        }
        // console.log("pinging", `/api/events/register/${props.tokenId}/${eventId}`);
        setRegisterLoader(true);
        axios.post(`/api/events/register/${props.tokenId}/${props.googleId}/${eventId}`, {
            eventType: eventType,
            eventNo: eventNo
        })
            .then(res => {
                // console.log(res);
                if (res.data.redirectUrl) {
                    window.location.href = res.data.redirectUrl
                }
                else {
                    setRegisteredIds(prevState => {
                        return [...prevState, res.data.eventId];
                    });
                    setPaymentSuccess([true, res.data.eventName]);
                }
            })
            .catch(err => {
                // console.log(err);
            })
            .finally(() => {
                setRegisterLoader(false);
                setRegisterForId([false, null, null, null]);
            })
    }

    useEffect(() => {
        setLoading(true);
        switch (cat) {
            case 0:
                axios.get("/api/events/type/0")
                    .then(res => {
                        // console.log(res);
                        setEvents(res.data);
                    })
                    .catch(err => {
                        // console.log(err);
                        setErr(err);
                    })
                    .finally(() => {
                        setLoading(false);
                    })
                break;
            case 1:
                axios.get("/api/events/type/1")
                    .then(res => {
                        setEvents(res.data);
                    })
                    .catch(err => {
                        // console.log(err);
                        setErr(err);
                    })
                    .finally(() => {
                        setLoading(false);
                    })
                break;
            case 2:
                axios.get("/api/events/type/2")
                    .then(res => {
                        setEvents(res.data);
                    })
                    .catch(err => {
                        // console.log(err);
                        setErr(err);
                    })
                    .finally(() => {
                        setLoading(false);
                    })
                break;
            case 3:
                axios.get("/api/events/type/3")
                    .then(res => {
                        setEvents(res.data);
                    })
                    .catch(err => {
                        // console.log(err);
                        setErr(err);
                    })
                    .finally(() => {
                        setLoading(false);
                    })
                break;

            case 4:
                axios.get("/api/events/type/4")
                    .then(res => {
                        setEvents(res.data);
                    })
                    .catch(err => {
                        // console.log(err);
                        setErr(err);
                    })
                    .finally(() => {
                        setLoading(false);
                    })
                break;

            default:

        }
    }, [cat]);

    useEffect(() => {
        if (props.tokenId && props.googleId) {
            axios.get(`/api/auth/info/${props.tokenId}/${props.googleId}`)
                .then(res => {
                    setRegisteredIds(res.data.registeredeventids);
                })
                .catch(err => {
                    // console.log(err);
                })
        }
    }, [props.tokenId, props.googleId]);


    useEffect(() => {
        const url_parts = url.parse(window.location.href, true),
            query = url_parts.query;

        if (query.eventName && query.payment_id) {
            setRegisteredIds(prevState => {
                return [...prevState, query.eventId];
            })
            setPaymentSuccess([true, query.eventName]);
        }

    }, []);

    const handlePaymentSuccessClose = () => {
        setPaymentSuccess([false, null]);
        props.history.replace({
            search: "",
        });
    };

    const handleConfirmation = (eventId, eventNo, eventName) => {
        if (!props.tokenId || !props.googleId) {
            // props.notifyAction("login to register", 3, "warning");
            props.authPopup();
        }
        else {
            setRegisterForId([true, eventId, eventNo, eventName]);
        }
    };

    const paymentSuccessModal = (
        <MDBContainer>
            <MDBModal className="registration" isOpen={paymentSuccess[0]} toggle={handlePaymentSuccessClose}>
                <MDBModalHeader toggle={handlePaymentSuccessClose}>
                    <img className="logo-registration" src="/logo/tirutsava_big.png" />
                </MDBModalHeader>

                <MDBModalBody>
                    <div className="registration__success">
                        Successfully registered to {paymentSuccess[1]}
                    </div>
                </MDBModalBody>

            </MDBModal>
        </MDBContainer>
    );

    const confirmRegistrationModal = (
        <MDBContainer>
            <MDBModal className="registration"
                isOpen={registerForId[0]}
                toggle={() => {
                    setRegisterForId([false, null, null, null]);
                }}
            >
                <MDBModalHeader
                    toggle={() => {
                        setRegisterForId([false, null, null, null]);
                    }}
                >
                    <img className="logo-registration" src="/logo/tirutsava_big.png" />
                </MDBModalHeader>

                <MDBModalBody>
                    <div className="registration__success">
                        Confirm registration to {registerForId[3]}
                    </div>
                    <div style={{color: "black"}}>
                        Note: Please wait for redirect to this page after payment (for paid events)
                    </div>
                    {
                        registerLoader ?
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>:
                                <div>
                                    <Button
                                        onClick={() => {
                                            handleRegister(registerForId[1], registerForId[2])
                                        }}
                                    >Confirm</Button>
                                    <Button
                                        onClick={() => {
                                            setRegisterForId([false, null, null, null]);
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
            {paymentSuccessModal}
            {confirmRegistrationModal}
            {
                categories.map(category => {
                    return (
                        <div key={category.id} className="events-category" style={category.id !== cat ? { display: "none" } : {}}>
                            <video autoPlay loop muted className="events-bg__vid">
                                <source src={category.vid} />
                            </video>
                            <div className="events__all">

                                <div
                                    className="close-btn"
                                    onClick={handleClose}
                                    style={viewEvent === null ? { display: "none" } : {}}
                                >
                                    <CancelPresentationOutlined
                                        style={{ fontSize: "48px" }}
                                    />
                                </div>

                                {
                                    loading ?
                                        <div className="events__loading">
                                            <div className="spinner-border text-primary" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div> :
                                        events.length === 0 ?
                                            <div className="events__comingsoon">
                                                <h1>Coming Soon</h1>
                                            </div> :
                                            events.map((event, idx) => {
                                                return (
                                                    <Event
                                                        key={idx}
                                                        viewEvent={viewEvent}
                                                        setViewEvent={setViewEvent}
                                                        eventName={event.name}
                                                        eventType={event.typeOfEvent}
                                                        eventDesc={event.description}
                                                        eventPrize={event.eventPrize}
                                                        entryFee={event.entryFee}
                                                        eventTime={event.eventTime}
                                                        maxParticipants={event.maxParticipants}
                                                        preview={viewEvent === null}
                                                        full={viewEvent === idx}
                                                        setFull={() => setViewEvent(idx)}
                                                        handleRegister={() => handleConfirmation(event._id, idx, event.name)}
                                                        alreadyRegistered={registeredIds.includes(event._id)}
                                                        registerLoader={registerLoader}
                                                        registrationOpen={event.registrationOpen}
                                                        submissionLink={event.submissionMail}
                                                    />
                                                );
                                            })
                                }

                            </div>
                        </div>
                    );
                })
            }

            <div
                className="bottom__nav"
                style={viewEvent !== null ? { display: "none" } : {}}
            >
                <BottomNavigation
                    value={cat}
                    onChange={(event, newValue) => {
                        setCat(newValue);
                        handleUrl(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction disabled={loading} label="PRE FEST" style={cat === 0 ? { opacity: 1, color: "white" } : { opacity: 0.7, color: "white" }} />
                    <BottomNavigationAction disabled={loading} label="WORKSHOPS" style={cat === 1 ? { opacity: 1, color: "white" } : { opacity: 0.7, color: "white" }} />
                    <BottomNavigationAction disabled={loading} label="CULTURAL" style={cat === 2 ? { opacity: 1, color: "white" } : { opacity: 0.7, color: "white" }} />
                    <BottomNavigationAction disabled={loading} label="TECHNICAL" style={cat === 3 ? { opacity: 1, color: "white" } : { opacity: 0.7, color: "white" }} />
                    <BottomNavigationAction disabled={loading} label="LITERARY" style={cat === 4 ? { opacity: 1, color: "white" } : { opacity: 0.7, color: "white" }} />
                </BottomNavigation>
            </div>

        </div>
    );
}

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsPage));