import React from "react";
import "./TopBar.scss";
import { NavLink } from "react-router-dom";
import { Animated } from "react-animated-css";
export default class TopBar extends React.Component {
  render() {
    return (
      <Animated
        animationIn="flash"
        animationOut="fadeOut"
        animationInDuration={1000}
        animationInDelay={5000}
        animationOutDuration={1000}
        isVisible={true}
      >
        <div className="topBar">
          <NavLink to="/kontakt" exact className="topBar__link">
            office@capitalgreen.rs
          </NavLink>
          <a href="tel:+381 64 5 222 333" className="topBar__link">
            <i className="fas fa-phone-square" />
            +381 64 5 222 333
          </a>
          <div className="topBar__link">Pon - Pet : 8:00 - 17:00</div>
        </div>
      </Animated>
    );
  }
}
