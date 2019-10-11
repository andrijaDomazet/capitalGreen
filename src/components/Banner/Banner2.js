import React, { Component } from "react";
import "./Banner2.scss";

export default class Banner2 extends Component {
  render() {
    let classes = this.props.small ? "banner2Div small" : "banner2Div";
    return (
      <div className={classes}>
        <p>
          <span>Capital green</span>
          Vaš partner na putu ka modernoj poljoprivrednoj proizvodnji!
        </p>
      </div>
    );
  }
}
