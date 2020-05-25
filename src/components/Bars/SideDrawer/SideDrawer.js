import React from "react";
import "./SideDrawer.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../../img/logo.png";
import { options } from "../../../shared/routing";

export default function SideDrawer(props) {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div onClick={props.clicked}>
      <nav className={drawerClasses}>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <h2>CAPITAL GREEN</h2>
        <ul>
          {options.map((option, index) => {
            return (
              <li key={index}>
                <NavLink to={option.route} exact className="top-link2">
                  {option.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
