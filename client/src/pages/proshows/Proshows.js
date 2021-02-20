import { CancelPresentationOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import Proshow from './Proshow';
import './Proshows.css'

const ProshowsPage = () => {
    var currentMode = ((new Date()).getHours() < 18 &&
        (new Date()).getHours() >= 6) ?
        'day-mode' :
        'night-mode';

    const [viewProshow, setViewProshow] = useState(null);

    const handleViewProshow = (idx = null) => {
        setViewProshow(idx);
    }

    return (
        <div className={`events-category-${currentMode}`}>

            <video autoPlay loop muted className="events-bg__vid">
                <source src="/bg_vid/cult-back-vid.mp4" />
            </video>

            <div className="events__all">
                <div
                    className="close-btn"
                    onClick={() => setViewProshow(null)}
                    style={viewProshow === null ? { display: "none" } : {}}
                >
                    <CancelPresentationOutlined
                        style={{ fontSize: "48px" }}
                    />
                </div>

                <Proshow
                    poster="/kenny.jpg"
                    eventName="Kenny Sebastian"
                    desc="The Keralite who can make everyone roll on the floor laughing by just standing up and opening his mouth. His repertoire of skill is vast and boy, he uses every arrow in his quiver to crack up stone faces which can put Spock to shame. As a member of  “The Improvisers”, India’s highest rated comedy group, he spread the joy of laughter both in India and abroad. Get ready for a Chai Time Laugh Riot on 28th Feb at Tirutsava. Registrations are open now."
                    about="The Bangalore-bred and Mumbai based stand-up comedian, writer, show-runner, musician and improviser. Kenny Sebastian is arguably one of the biggest English comedy acts in the country, creating content fit for both the internet and the stage."
                    full={viewProshow === 1}
                    preview={viewProshow === null}
                    setFull={() => handleViewProshow(1)}
                    entryFee={0}
                    url="https://www.skillboxes.com/events/kenny-sebastian-tirutsava-iit-tirupati"
                    date="28th Feb: 7PM Onwards"
                />

                <Proshow
                    poster="/gajendra.jpg"
                    eventName="Gajendra Verma"
                    desc="A vocalist and guitarist of national fame who debuted into the music industry with his famous song 'Tune Mere Jaana'. Even in the music industry, he dons multiple hats: music producer, music director and composer. He can be counted as one of the famous singers in Bollywood, and his talent has bagged him various offers to perform live in many cities and programmes.  Team Tirutsava is pleased to inform you that this sensational singer would be singing live for IIT Tirupati during Tirutsava.  Register now nahi to Tera Ghata hai."
                    about="Gajendra Verma is an Indian singer, composer, lyricist and sound recordist. Best known for Emptiness, Tera Ghata, Mann Mera, Mera Jahan, Ik Kahani etc.."
                    full={viewProshow === 2}
                    preview={viewProshow === null}
                    setFull={() => handleViewProshow(2)}
                    entryFee={0}
                    url="https://www.skillboxes.com/events/gajendra-verma-tirutsava-iit-tirupati"
                    date="27th Feb: 7PM Onwards"
                />
            </div>
        </div>
    );
}

export default ProshowsPage;