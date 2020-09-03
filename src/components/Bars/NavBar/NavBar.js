import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import { options } from "../../../shared/shared";

export default function NavBar(props) {
  return <div className="navBar-div">{navBarOptions(props)}</div>;
}

const navBarOptions = (props) => {
  return (
    <div className="links">
      {options.map((option, index) => {
        return (
          <NavLink to={option.route} exact key={index} className="nav-link">
            {option.title}
          </NavLink>
        );
      })}
      {adminFunction(props)}
    </div>
  );
};
const adminFunction = (props) => {
  return props.admin ? <NavLink to="admin">Admin</NavLink> : null;
};
