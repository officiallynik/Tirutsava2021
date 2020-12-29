import React from "react";
import { isMobile } from "react-device-detect";
import Stats from "./stats";
import Movieafter from "./Movieafter";
import MobileView from "./mobileView/Year2020MobileView";
import "./Year2020.css";
import Newgallery from "./Newgallery";

export default function CenteredGrid() {
 

  return (
    <div className="Year2020">
      <div className="year-head">
        <div className="head-line"><div className="line-color"></div></div>
        <div className="head-name">2020</div>
        <div className="head-line"><div className="line-color"></div></div>
      </div>
      <div className="year-cont row">
        <div className="col-md-6 movie">
          <div className="movie-cont">
            <Movieafter></Movieafter>
          </div>
        </div>
        <div className="col-md-6 gallery">
          <div className="gallery-cont">
            <Newgallery></Newgallery>
          </div>
          </div>  
      </div>
      <div className="stats-foot">
        <Stats></Stats>
        </div>     
    </div>
  );
}
