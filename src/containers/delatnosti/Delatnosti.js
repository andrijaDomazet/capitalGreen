import React, { Component } from "react";
import "./Delatnosti.scss";
import ObjectRow from "../Proizvodi/ObjectRow/ObjectRow.js";
import Data from "../../allData.json";

export default class Delatnosti extends Component {
  state = {
    data: Data
  };

  render() {
    return (
      <div>
        <ObjectRow data={this.state.data} />
      </div>
    );
  }
}
