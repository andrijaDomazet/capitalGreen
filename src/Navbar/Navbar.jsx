import React from 'react';
import {  MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink,} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './Navbar.css'

class Navbar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
 
    return(
      <div>
        <Router>
        <MDBNavbar className='navstyle' dark expand="md" scrolling fixed="top">
                <MDBContainer>
                  <MDBNavbarBrand href="/">
                    <strong>CapitalGreen</strong>
                  </MDBNavbarBrand>
                  <MDBNavbarToggler onClick={this.onClick} />
                  <MDBCollapse isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav left>
                      <MDBNavItem active>
                        <MDBNavLink to="#">Home</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#">Link</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#">Profile</MDBNavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBContainer>
              </MDBNavbar>
        </Router>
       
      </div>
    );
  }
}

export default Navbar;