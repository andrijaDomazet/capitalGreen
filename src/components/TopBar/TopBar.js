import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./TopBar.css";

export default class TopBar extends React.Component {
  render() {
    return (
      <div className="topBar">
        <Nav>
          <NavItem>
            <NavLink href="#" className="link-topBar">
              <span className="btn-mail">
                <i class="far fa-envelope" />
              </span>
              office@capitalgreen.rs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="link-topBar">
              <span className="btn-phone">
                <i class="fas fa-phone-square" />
              </span>
              +381 64 5 222 333
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="link-topBar">
              <span className="btn-clock">
                <i class="far fa-clock" />
              </span>
              Pon - Pet : 8:00 - 17:00
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
