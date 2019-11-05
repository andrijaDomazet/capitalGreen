import React, { Component } from "react";
import "./Bars.scss";
import Navibar from "../../components/Navibar/Navibar";
import TopBar from "../../components/TopBar/TopBar";
import Logo from "../../logo.png";
import ToggleButton from "../../components/SideDrawer/ToggleButton";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Backdrop from "../../components/Backdrop/Backdrop";

export default class Bars extends Component {
  state = {
    admin: false,
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
    console.log(this.state.sideDrawerOpen);
  };
  removeBackdrop = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };
  render() {
    return (
      <div className="row appBars">
        <div className="col-sm-2 logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="col-sm-9">
          <Backdrop
            clicked={this.removeBackdrop}
            show={this.state.sideDrawerOpen}
          />
          <TopBar />
          <Navibar admin={this.state.admin} />
          <ToggleButton click={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
        </div>
      </div>
    );
  }
}
