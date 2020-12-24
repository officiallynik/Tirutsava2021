import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

const SideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  const navLinks = document.querySelectorAll("li.move");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `linkFade 0.3s ease forwards ${index / 15 + 0.1}s`;
    }
  });

  return (
    <nav className={drawerClasses}>
      <ul className="link-tab">
        <li className="move" onClick={props.click}>
          <Link to="/proshows">PROSHOWS</Link>
        </li>
        <li className="move" onClick={props.click}>
          <Link to="/aboutus">LEGACY</Link>
        </li>
        <li className="move" onClick={props.click}>
          <Link to="/events">EVENTS</Link>
        </li>
        <li className="move" onClick={props.click}>
          <Link to="/sponsors">SPONSORS</Link>
        </li>
        <li className="move" onClick={props.click}>
          <Link to="/faq">FAQs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
