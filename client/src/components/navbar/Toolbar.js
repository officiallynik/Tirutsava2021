import React from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import "./Toolbar.css";
import logo from "../../images/logo/tirutsava_logo.png";

const Toolbar = props => (
  <div className="toolbar">
    <nav className="toolbar__navigation">

      <div className="toolbar__logo">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            style={{ height: "100%", width: "324px" }}
            alt="Tirutsava Logo"
          />
        </a>
      </div>

      <div className="toolbar_navigation-items">
        <ul id="navit">
          <li>
            <Link to="/proshows">PROSHOWS</Link>
          </li>
          <li>
            <Link to="/aboutus">LEGACY</Link>
          </li>
          <li>
            <Link to="/events">EVENTS</Link>
          </li>
          <li>
            <Link to="/sponsors">SPONSORS</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
        </ul>
      </div>

      <div className="toolbar__toggle-button">
        <Burger click={props.drawer} xbtn={props.xbtn} />
      </div>

    </nav>
  </div>
);

export default Toolbar;
