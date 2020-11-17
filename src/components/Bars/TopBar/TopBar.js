import React from "react";
import "./TopBar.scss";
import { NavLink } from "react-router-dom";

export default class TopBar extends React.Component {
  render() {
    return (
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
    );
  }
}
