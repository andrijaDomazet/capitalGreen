import React from "react";
import "./Footer.scss";
import { options } from "../../shared/shared";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
// import polino from "./img/polino.png";
// import virginia from "./img/92b2721c-4f62-4346-8f8f-7211802de694-extent-thumbnail.png";
// import zelenihit from "./img/zeleni-hit-avatar-600x600.jpg";
// import adriatica from "./img/1510838881.4915_3_o.jpg";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <h1>CAPITAL GREEN</h1>
        <div className="footer__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer__links">
          {options.map((option, index) => {
            return (
              <NavLink className="links" key={index} to={option.route}>
                {option.title}
              </NavLink>
            );
          })}
        </div>
        <div className="footer__partners">
          <span>Partneri</span>
          <div className="partners__logo">
            {/* <img src={virginia} alt="" />
            <img src={adriatica} alt="" />
            <img src={polino} alt="" />
            <img src={zelenihit} alt="" /> */}
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        Created by <span>domY</span>
      </div>
    </div>
  );
}
