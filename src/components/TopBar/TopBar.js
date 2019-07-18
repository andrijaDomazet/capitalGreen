import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.scss";

export default class TopBar extends React.Component {
  render() {
    return (
      <div className="topBar-div">
        <Link to="#" className="topBar-link">
          <span className="btn-mail">
            <i className="fas fa-envelope" />
          </span>
          office@capitalgreen.rs
        </Link>
        <Link to="#" className="topBar-link">
          <span className="btn-phone">
            <i className="fas fa-phone-square" />
          </span>
          +381 64 5 222 333
        </Link>
        <Link to="#" className="topBar-link">
          <span className="btn-clock">
            <i className="fas fa-clock" />
          </span>
          Pon - Pet : 8:00 - 17:00
        </Link>
      </div>
    );
  }
}
