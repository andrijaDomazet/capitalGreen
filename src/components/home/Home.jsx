import React, { Component } from "react";
import InfoReklama from "../../InfoReklama/InfoReklama";
import "./Home.css";
import Jumbo from "../../Jumbo/Jumbo";

export default class Home extends Component {
  state = {
    prikazInfoObjekta: true
  };

  removeCommentBox = () => {
    this.setState({
      prikazInfoObjekta: false
    });
  };

  render() {
    return (
      <div>
        <Jumbo />
        <InfoReklama
          //   podaci={this.props.podaci}
          removeCommentBox={this.removeCommentBox}
          show={this.state.prikazInfoObjekta}
        />
      </div>
    );
  }
}
