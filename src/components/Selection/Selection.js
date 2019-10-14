import React, { Component } from "react";
import "./Selection.scss";

export default class Selection extends Component {
  state = {
    groupProducts: ""
  };
  setGroupProducts = e => {
    var group = e.target.value;
    this.setState({ groupProducts: e.target.value });
    this.props.changeGroup(group);
  };
  render() {
    return (
      <div className="selectionDiv">
        <select onChange={this.setGroupProducts}>
          <option value="1">Đubriva</option>
          <option value="2">Folije</option>
          <option value="3">Biološka zaštita</option>
        </select>
      </div>
    );
  }
}
