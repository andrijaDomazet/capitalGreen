import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.scss";

export default class TopBar extends React.Component {
  optionsTopBar = () => {
    return options.map((option, index) => {
      return (
        <Link to={option.route} key={index} className="topBar__link">
          <i className={`fas fa-${option.icon}`} />
          {option.title}
        </Link>
      );
    });
  };
  render() {
    return <div className="topBar">{this.optionsTopBar()}</div>;
  }
}
const options = [
  { route: "#", title: "office@capitalgreen.rs", icon: "envelope" },
  { route: "#", title: "+381 64 5 222 333", icon: "phone-square" },
  { route: "#", title: "Pon - Pet : 8:00 - 17:00", icon: "clock" },
];
