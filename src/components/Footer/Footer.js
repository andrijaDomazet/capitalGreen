import React from "react";
import "./Footer.scss";
import { options } from "../../shared/shared";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
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
        <div>Partneri</div>
      </div>
      <div className="footer__bottom">
        Created by <span>Domy</span>
      </div>
    </div>
  );
}
