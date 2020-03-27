import React, { Component } from "react";
import "./Table.scss";
import Selection from "../../../components/Selection/Selection";
import slika from "../../../img/logo.png";
export default class Table extends Component {
  state = {
    value: "select",
    grupaProizvoda: "folije",
    group: this.props.data[1]
  };

  //render for header of table
  renderTableHeader = () => {
    return this.props.data[0].map((naziv, i) => {
      return <th key={i}>{naziv}</th>;
    });
  };

  //render for td for table
  renderTableData = () => {
    return this.state.group.map((proizvod, id) => {
      return (
        <tr key={proizvod.id}>
          <td>
            <img src={slika} alt="" />
            {proizvod.id}.
          </td>
          <td>{proizvod.name}</td>
          <td>{proizvod.pakovanje} </td>
          <td>{proizvod.price.toFixed(2)} </td>
          <td>
            <button className="btn btn-secondary btn-sm" onClick={this.poziv}>
              Info
            </button>
          </td>
        </tr>
      );
    });
  };

  poziv = () => {
    console.log("Ucitavanje proizvoda");
  };
  change = event => {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  };
  grupaProizvoda = e => {
    const groupProducts = this.props.data[e];
    this.setState({ group: groupProducts });
  };
  render() {
    return (
      <div className="table">
        <div className="table__choise">
          <h3>Izaberite grupu proizvoda:</h3>
          {<Selection changeGroup={this.grupaProizvoda} />}
        </div>
        <table>
          <thead>
            <tr>{this.renderTableHeader()}</tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}
