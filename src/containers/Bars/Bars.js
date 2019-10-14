import React, { Component } from "react";
import Navibar from "../../components/Navibar/Navibar";
import TopBar from "../../components/TopBar/TopBar";
import Logo from "../../logo.png";
import "./Bars.scss";

export default class Bars extends Component {
  state = {
    admin: false
  };
  render() {
    return (
      <div className="row appBars">
        <div className="col-sm-2 logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="col-sm-9">
          <TopBar />
          <Navibar admin={this.state.admin} />
        </div>
      </div>
    );
  }
}
