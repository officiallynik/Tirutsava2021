import React from "react";
import { isMobile } from "react-device-detect";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Stats from "./stats";
import Gallery from "./gallery/Gallery";
import Movieafter from "./Movieafter";

import MobileView from "./mobileView/Year2020MobileView";
import "./Year2020.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  if(isMobile) {
      return (
        <MobileView />
      )
  }

  return (
    <div className="Year2020">
      <Grid container spacing={3} direction="column">
        <Grid item container spacing={2}>
            <Grid item md={6} xs={12}>
                <div className="pics">
                    <Gallery />
                </div>
            </Grid>
            <Grid item md={6} xs={12}>
                <div className="movieAfter">
                    <Movieafter />
                </div>
            </Grid>
        </Grid>
        <Grid item container>
          <Grid item md={12} xs={12}>
            <div className="stats">
              <Stats />
            </div>
          </Grid>
        </Grid>
        
      </Grid>
    </div>
  );
}
