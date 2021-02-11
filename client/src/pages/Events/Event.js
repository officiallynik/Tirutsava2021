import React from 'react';
import { Button } from 'react-bootstrap';
import './EventsPage.css';

const Event = props => {

    let name = props.eventName;
    name = name.toLowerCase();
    name = name.replaceAll(" ", "_");

    const desc = props.eventDesc.split("///");

    const prizes = props.eventPrize;

    const dates = props.eventTime.split("///");

    return (
        <div
            // className={props.viewEvent === null? "event__preview": viewEvent === 0? "event__full": "event__hide"}
            className="event__preview"
            style={props.full ?
                { backgroundImage: `url("/events/${name}.jpg")`, opacity: 1 } :
                !props.preview ?
                    { flex: 0 } :
                    { background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/events/${name}.jpg")` }
            }
            onClick={props.setFull}
        >

            <div
                className="event__preview__name"
                style={!props.preview ? { display: "none" } : {}}
            >
                {props.eventName.toUpperCase()}
            </div>

            <div
                className="event__details"
                style={!props.full ? { display: "none" } : {}}
            >
                <div className="event__name">
                    <h1>{props.eventName.toUpperCase()}</h1>
                </div>

                <div className="event__details__tab">
                    <div className="event__type">{props.eventType}</div>
                    <div className="event__info">

                        <div className="event__registration_section">
                            <div className="event__entry">
                                {
                                    props.entryFee === 0 ?
                                        <div>No Entry Fee</div> :
                                        <div>Entry: Rs. {props.entryFee}</div>
                                }
                            </div>
                            <div className="event__details__btn">
                                {
                                    props.registerLoader ?
                                        <a
                                            href="#"
                                        >
                                            <Button
                                                onClick={props.handleRegister}
                                                disabled
                                            >
                                                Registering...
                                            </Button>
                                        </a> :
                                        <a
                                            href={props.redirectRegistrationUrl || "#"}
                                        >
                                            <Button
                                                onClick={props.redirectRegistrationUrl? null: props.handleRegister}
                                                disabled={props.alreadyRegistered || !props.registrationOpen}
                                            >
                                                {
                                                    props.alreadyRegistered ?
                                                        "Registered" :
                                                        "Register"
                                                }
                                            </Button>
                                        </a>
                                }
                                <a href={`/events/${name}.pdf`} target="_blank" rel="noopener noreferrer">
                                    <Button>Rules</Button>
                                </a>
                                <a href={`/events/${name}.jpg`} target="_blank" rel="noopener noreferrer">
                                    <Button>Poster</Button>
                                </a>
                            </div>
                            <div style={{ textAlign: "left" }}>
                                * Events cannot be unregistered
                                <br />
                                Note: If the participation is very less, the prize money will be reduced by half of the total amount
                                {
                                    !props.registrationOpen ?
                                        <div style={{ fontSize: "20px" }}>
                                            <br />
                                            Registrations Closed
                                        </div> :
                                        null
                                }
                                {
                                    props.alreadyRegistered && props.submissionLink !== ""?
                                    <div style={{fontSize: "20px", fontWeight: "bold"}}>
                                        Submission Link:
                                        <a href={props.submissionLink} target = "_blank" rel = "noopener noreferrer"
                                            className="event__submission__link"
                                        > Click Here</a>
                                    </div>:
                                    null
                                }
                            </div>
                        </div>

                        <div className="col__separator"></div>

                        <div className="event__details__main">

                            <div className="event__desc">
                                {
                                    desc.map((line, idx) => {
                                        if (line === " ") {
                                            return <br key={idx} />
                                        }
                                        return <div key={idx}>{line}</div>
                                    })
                                }
                                {
                                    props.links.forEach((link, idx) => {
                                        return (
                                            <div key={idx}>
                                                {link.desc}:
                                                <a href={link.href}
                                                ></a>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="event__prize">
                                {
                                    prizes.map((prize, idx) => {
                                        // console.log(prize);
                                        if (idx === 0) {
                                            return <div key={idx}>Winner: {prize}</div>
                                        }
                                        else if (idx === 1) {
                                            return <div key={idx}>Runner: {prize}</div>
                                        }
                                        else if (idx === 2) {
                                            return <div key={idx}>3rd place: {prize}</div>
                                        }
                                        return <div key={idx}>{idx+1}th place: {prize}</div>
                                    })
                                }
                            </div>

                            <div className="event__time">
                                Event schedule info:
                                {
                                    dates.map((date, idx) => {
                                        return <div key={idx}>{date}</div>
                                    })
                                }
                            </div>

                            <div className="event__participants">

                                {
                                    props.maxParticipants > 1 ?
                                        <div>
                                            Max. participants (per team): {props.maxParticipants}
                                            <div>
                                                <em>
                                                    * Only team leader has to register
                                                </em>
                                            </div>
                                        </div> :
                                        <div>
                                            <div>Participants info.</div>
                                            Single player event
                                        </div>
                                }
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default Event;