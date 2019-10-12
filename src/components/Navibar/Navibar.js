import React from "react";
import { NavLink } from "react-router-dom";
import "./Navibar.scss";

export default function Navibar(props) {
  const navBarOptions = () => {
    return (
      <div className="links">
        {options.map((option, index) => {
          return (
            <NavLink to={option.route} exact key={index} className="nav-link">
              {option.title}
            </NavLink>
          );
        })}
        {adminFunction()}
      </div>
    );
  };
  const adminFunction = () => {
    return props.admin ? <NavLink to="admin">Admin</NavLink> : null;
  };

  return <div className="navBar-div">{navBarOptions()}</div>;
}
const options = [
  { route: "/", title: "Naslovna" },
  { route: "/o-nama", title: "O nama" },
  { route: "/delatnosti", title: "Delatnosti" },
  { route: "/proizvodi", title: "Proizvodi" },
  { route: "/zaposlenje", title: "Zaposlenje" },
  { route: "/kontakt", title: "Kontakt" }
];
