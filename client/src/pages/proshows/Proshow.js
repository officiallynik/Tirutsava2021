import React from 'react';
import { Button } from 'react-bootstrap';
import './Proshows.css';

const Proshow = props => {
    return (
        <div
            // className={props.viewEvent === null? "event__preview": viewEvent === 0? "event__full": "event__hide"}
            className="event__preview"
            style={props.full ?
                { backgroundImage: `url("${props.poster}")`, opacity: 1 } :
                !props.preview ?
                    { flex: 0 } :
                    { background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${props.poster}")` }
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
                    <div className="event__type">Pro Show</div>
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
                                <a href={props.url} target="_blank" rel="noopener noreferrer">
                                    <Button>Register</Button>
                                </a>
                                <a href={props.poster} target="_blank" rel="noopener noreferrer">
                                    <Button>Poster</Button>
                                </a>
                            </div>
                        </div>

                        <div className="col__separator"></div>

                        <div className="event__details__main">

                            <div className="event__desc">
                                <div>
                                    <h4 style={{fontWeight: "bold"}}>About {props.eventName}</h4>
                                    <div>{props.about}</div>
                                </div>
                                <div style={{height: "10px"}}></div>
                                <div>
                                    <h4 style={{fontWeight: "bold"}}>Description</h4>
                                    <div>{props.desc}</div>
                                </div>
                            </div>

                            <div className="event__time">
                                Event schedule info:
                                <div>{props.date}</div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default Proshow;