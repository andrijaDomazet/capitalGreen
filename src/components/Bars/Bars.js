import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Bars.scss";
import TopBar from "./TopBar/TopBar";
import Logo from "../../img/logo.png";
import ToggleButton from "./SideDrawer/ToggleButton";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";
import NavBar from "./NavBar/NavBar.js";

export default class Bars extends Component {
  state = {
    admin: false,
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  removeBackdrop = () => {
    this.setState({
      sideDrawerOpen: false,
    });
  };
  render() {
    return (
      <div className="bars">
        <NavLink to="/#/" className="bars__logo">
          <img src={Logo} alt="logo" />
        </NavLink>
        <div className="bars__links">
          <Backdrop
            clicked={this.removeBackdrop}
            show={this.state.sideDrawerOpen}
          />
          <TopBar />
          <NavBar admin={this.state.admin} />
          <ToggleButton clicked={this.drawerToggleClickHandler} />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            clicked={this.drawerToggleClickHandler}
          />
        </div>
      </div>
    );
  }
}
