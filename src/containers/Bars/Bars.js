import React, { Component } from "react";
import "./Bars.scss";
import TopBar from "../../components/TopBar/TopBar";
import Logo from "../../img/logo.png";
import ToggleButton from "../../components/SideDrawer/ToggleButton";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Backdrop from "../../components/Backdrop/Backdrop";
import NavBar from "../../components/NavBar/NavBar.js";

export default class Bars extends Component {
  state = {
    admin: false,
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  removeBackdrop = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };
  render() {
    return (
      <div className="bars__div">
        <div className="bars__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="bars__links">
          <Backdrop
            clicked={this.removeBackdrop}
            show={this.state.sideDrawerOpen}
          />
          <TopBar />
          <NavBar admin={this.state.admin} />
          <ToggleButton click={this.drawerToggleClickHandler} />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            clicked={this.drawerToggleClickHandler}
          />
        </div>
      </div>
    );
  }
}
