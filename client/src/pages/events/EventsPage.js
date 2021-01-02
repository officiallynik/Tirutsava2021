import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import WorkshopBG from '../../images/events/1.jpg'
import EventsBG from '../../images/events/2.jpg'
import GuestLectureBG from '../../images/events/3.jpg'
import HackathonsBG from '../../images/events/4.jpg'
import './EventsPage.css'

class EventsPage extends Component {
    state = {
        eventCategories: [
            {
                id: 1,
                type: "Workshops",
                img: WorkshopBG
            },
            {
                id: 2,
                type: "Events",
                img: EventsBG
            },
            {
                id: 3,
                type: "Guest Lectures",
                img: GuestLectureBG
            },
            {
                id: 4,
                type: "Hackathons",
                img: HackathonsBG
            }
        ]
    }

    render() {
        console.log(this)
        return (
            <div>
                <Carousel>
                    {this.state.eventCategories.map(e =>
                        (

                            <Carousel.Item key={e.id}>
                                <img src={e.img}
                                    className="d-block w-100"
                                    alt={e.type}
                                    style={{ height: "90vh" }} />
                                <Carousel.Caption>
                                    <h3>{e.type}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>

                        )
                    )}
                </Carousel>
                {/* Button to view events in each category. Click handler to be added */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h1 className="view-button-text">View All</h1>
                        </div>
                        <div className="flip-card-back">
                            <h1 className="view-button-text">View All</h1>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default EventsPage;