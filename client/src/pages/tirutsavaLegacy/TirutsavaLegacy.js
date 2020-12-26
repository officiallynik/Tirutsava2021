import React, { Component } from "react";

import Gallery from "./gallery/Gallery";
import YearsBar from "./YearsBar";

import "./TirutsavaLegacy.css";

class TirutsavaLegacy extends Component {
    render() {
        return(
            <div className="triutsavaLegacy">

                {/* Years bar */}
                <YearsBar />

                {/* stats of that year */}

                {/* video and content */}
                <Gallery />

            </div>
        )
    }
}

export default TirutsavaLegacy;
