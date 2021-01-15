import React from 'react';
import { Button } from 'react-bootstrap';
import './EventsPage.css';

const Event = props => {

    let name = props.eventName;
    name = name.toLowerCase();
    name = name.replace(" ", "_");

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
                    { backgroundImage: `url("/events/${name}.jpg")` }
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

                        <div>
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
                                            href="#"
                                        >
                                            <Button
                                                onClick={props.handleRegister}
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
                            <div style={{textAlign: "right"}}>
                                * Events cannot be unregistered
                                <br />
                                Note: If the participation is very less, the prize money will be reduced by half of the total amount
                                {
                                    !props.registrationOpen?
                                    <div style={{fontSize: "20px"}}>Registration Opening Soon</div>:
                                    null
                                }
                            </div>
                        </div>

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
                            </div>

                            <div className="event__prize">
                                {
                                    prizes.map((prize, idx) => {
                                        // console.log(prize);
                                        if (idx === 0) {
                                            return <div key={idx}>Winner: Rs. {prize}</div>
                                        }
                                        else if (idx === 1) {
                                            return <div key={idx}>Runner: Rs. {prize}</div>
                                        }
                                        else if (idx === 3) {
                                            return <div key={idx}>3rd place: Rs. {prize}</div>
                                        }
                                        return <div key={idx}>{idx}th place: Rs. {prize}</div>
                                    })
                                }
                            </div>

                            <div className="event__entry">
                                {
                                    props.entryFee === 0 ?
                                        <div>No Entry Fee</div> :
                                        <div>Entry: Rs. {props.entryFee}</div>
                                }
                            </div>

                            <div className="event__time">
                                {
                                    dates.map((date, idx) => {
                                        return <div key={idx}>{date}</div>
                                    })
                                }
                            </div>

                            <div className="event__participants">
                                Max. Number of Participants: {props.maxParticipants}
                                {
                                    props.maxParticipants > 1 ?
                                        <div>
                                            <em>
                                                * Only team leader has to register
                                        </em>
                                        </div> :
                                        null
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