import React from "react";
import { Link } from "react-router-dom";
import "./Navibar.scss";

export default function Navibar(props) {
  const adminFunction = () => {
    return props.admin ? <Link to="admin">Admin</Link> : null;
  };
  const navBarOptions = () => {
    return (
      <div className="links">
        {options.map((option, index) => {
          return (
            <Link to={option.route} key={index} className="nav-link">
              {option.title}
            </Link>
          );
        })}
        {adminFunction()}
      </div>
    );
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
