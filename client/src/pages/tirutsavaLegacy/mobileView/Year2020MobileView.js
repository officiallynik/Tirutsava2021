import React from "react";
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Typography, Box} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import Gallery from "../gallery/Gallery";
import Movieafter from "../Movieafter";
import Stats from "../stats";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));


function MobileView() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div>
      <Paper position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="off"
            aria-label="scrollable prevent tabs example"
          >
            <Tab label="Gallery" aria-label="phone" {...a11yProps(0)} />
            <Tab label="After Movie" aria-label="favorite" {...a11yProps(1)} />
            <Tab label="Stats" aria-label="person" {...a11yProps(2)} />
          </Tabs>
        </Paper>
        <TabPanel value={value} index={0}>
          <Gallery />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Movieafter />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Stats />
        </TabPanel>
      </div>
  )
}


export default MobileView;