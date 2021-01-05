import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import { options } from "../../../shared/shared";
import { Animated } from "react-animated-css";

export default function NavBar(props) {
  return <div className="navBar">{navBarOptions(props)}</div>;
}

const navBarOptions = (props) => {
  return (
    <div className="links">
      {options.map((option, index) => {
        return (
          <Animated
            animationIn="flash"
            animationOut="fadeOut"
            animationInDuration={1000}
            animationInDelay={4000}
            animationOutDuration={1000}
            isVisible={true}
            key={index}
          >
            <NavLink to={option.route} exact className="nav-link">
              {option.title}
            </NavLink>
          </Animated>
        );
      })}
      {adminFunction(props)}
    </div>
  );
};
const adminFunction = (props) => {
  return props.admin ? <NavLink to="admin">Admin</NavLink> : null;
};
