import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./Navibar.css";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#326301d3" }} light expand="md">
          <NavbarBrand href="/" style={{ color: "white", paddingLeft: "25px" }}>
            CapitalGreen
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto navigacija" navbar>
              <NavItem>
                <NavLink href="/o-nama/" style={{ color: "white" }}>
                  O nama
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/delatnosti/" className="nav-link">
                  Delatnosti
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/proizvodi/" className="nav-link">
                  Proizvodi
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/zaposlenje/" className="nav-link">
                  Zaposlenje
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/kontakt/" className="nav-link">
                  Kontakt
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
