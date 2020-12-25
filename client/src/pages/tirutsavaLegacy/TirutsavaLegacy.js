import React, { Component } from "react";

import Navbar from "../../components/navbar/Navbar";
import YearsBar from "./YearsBar";

import "./TirutsavaLegacy.css";
import Stats from './stats';

class TirutsavaLegacy extends Component {
    render() {
        return(
            <div className="triutsavaLegacy">

                {/* Years bar */}
                <YearsBar />

                {/* stats of that year */}
                <Stats></Stats>

                {/* video and content */}

            </div>
        )
    }
}

export default TirutsavaLegacy;
