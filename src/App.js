import React, { Component } from "react";
import {MDBContainer} from "mdbreact";
import NavBar from './Navbar/Navbar.jsx';
import Jumbo from './Jumbo/Jumbo.jsx'
import "./index.css";


class App extends Component {
  render() {
    return (
      <MDBContainer>
        <NavBar />
        <Jumbo />
      </MDBContainer>
    );
  }
}

export default App;
