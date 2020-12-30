import React, { useState } from "react";
import Stats from "./stats";
import Movieafter from "./Movieafter";
import "./Year2020.css";
import Newgallery from "./Newgallery"

export default function CenteredGrid(props) {

  return (
    <div className="Year2020">
      <div className="year-head">
      <div className="head-line"><div className="line-color"></div></div>
        <div className={`head-name ${props.currentMode}`}>2019</div>
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
        <Stats currentMode={props.currentMode}></Stats>
        </div>     
    </div>
  );
}
