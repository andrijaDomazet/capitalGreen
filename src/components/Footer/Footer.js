import React from "react";
import "./Footer.scss";
import { options } from "../../shared/shared";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
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
        <div className="footer__partners">Partneri</div>
      </div>
      <div className="footer__bottom">
        Created by <span>domY</span>
      </div>
    </div>
  );
}
