import React, { Component } from "react";
import "./News.scss";
export default class News extends Component {
  render() {
    let classes = this.props.small ? "newsDiv small" : "newsDiv";
    return (
      <div className={classes}>
        <p>
          <span>Capital green</span>
          {/* <span>News1</span> */}
          Vaš partner na putu ka modernoj poljoprivrednoj proizvodnji!
        </p>
      </div>
    );
  }
}
