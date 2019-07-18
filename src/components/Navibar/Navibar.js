import React from "react";
import { Link } from "react-router-dom";
import "./Navibar.scss";

export default function Navibar(props) {
  const { admin } = props;
  let adminPanel = newFunction();

  return (
    <div className="navBar-div">
      <div className="links">
        <Link to="/" className="nav-link">
          Naslovna
        </Link>
        <Link to="/o-nama/" className="nav-link">
          O nama
        </Link>
        <Link to="/delatnosti/" className="nav-link">
          Delatnosti
        </Link>
        <Link to="/proizvodi/" className="nav-link">
          Proizvodi
        </Link>
        <Link to="/zaposlenje/" className="nav-link">
          Zaposlenje
        </Link>
        <Link to="/kontakt/" className="nav-link">
          Kontakt
        </Link>
        {adminPanel}
      </div>
    </div>
  );

  function newFunction() {
    let adminPanel = null;
    if (admin) {
      adminPanel = <Link to="admin">Admin</Link>;
    }
    return adminPanel;
  }
}
