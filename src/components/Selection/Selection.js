import React, { Component } from "react";
import "./Selection.scss";

export default class Selection extends Component {
  state = {
    groupProducts: ""
  };
  setGroupProducts = e => {
    var group = e.target.value;
    this.setState({ groupProducts: e.target.value });
    this.props.changeGroup(Number(group));
  };
  render() {
    return (
      <div className="selection">
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
const groupOfProducts = [
  { title: "Svi proizvodi", value: 0 },
  { title: "Đubriva", value: 1 },
  { title: "Folije", value: 2 },
  { title: "Biološka zaštita", value: 3 }
];
