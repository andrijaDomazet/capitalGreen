import React from "react";
import "./SideDrawer.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../../img/logo.png";

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
const options = [
  { route: "/", title: "Naslovna" },
  { route: "/o-nama", title: "O nama" },
  { route: "/delatnosti", title: "Delatnosti" },
  { route: "/proizvodi", title: "Proizvodi" },
  { route: "/zaposlenje", title: "Zaposlenje" },
  { route: "/kontakt", title: "Kontakt" }
];