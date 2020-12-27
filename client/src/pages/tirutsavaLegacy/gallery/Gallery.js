import React from "react";
import Deck from "./Deck";

import "./Gallery.css";

function Gallery() {
    return (
        <div className="legacy_gallery">
            <div className="deck">
                <Deck />
            </div>
        </div>
    )
}


export default Gallery;