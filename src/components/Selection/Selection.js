import React, { Component } from "react";
import "./Selection.scss";
import { groupOfProducts } from "../../shared/shared";

export default class Selection extends Component {
  state = {
    groupProducts: "",
  };
  setGroupProducts = (e) => {
    var group = e.target.value;
    this.setState({ groupProducts: e.target.value });
    this.props.changeGroup(Number(group));
  };
  render() {
    return (
      <div className="selection">
        <h3>Izaberite grupu proizvoda:</h3>
        <select onChange={this.setGroupProducts}>
          {groupOfProducts.map((group, index) => {
            return (
              <option key={index} value={group.value}>
                {group.title}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
