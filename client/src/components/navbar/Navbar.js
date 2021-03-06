import React, { Component } from "react";

import Toolbar from "./Toolbar";
import SideDrawer from "./SideDrawer";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    sideDrawerOpen: false,
    login: localStorage.getItem('loggedin')
  };

  sideDrawerHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    return (
      <div style={{ height: "10vh" }}>
        <Toolbar
          drawer={this.sideDrawerHandler}
          xbtn={this.state.sideDrawerOpen}
          isHomePage={this.props.isHomePage || false}
        />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          click={this.backdropHandler}
        />
      </div>
    );
  }
}

export default Navbar;
