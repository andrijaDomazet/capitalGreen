import React, { Component } from "react";
import "./Table.scss";
import Selection from "../../../components/Selection/Selection";
import slika from "../../../img/logo.png";
import Pagination from "../../../UI/Pagination/Pagination";

export default class Table extends Component {
  state = {
    group: [
      ...this.props.data[1],
      ...this.props.data[2],
      ...this.props.data[3]
    ],

    //state for pagination
    showPagination: "",
    newPage: false,
    startOperacion: 1,
    operationPerPage: 8,
    elemNum: [0, 7]
    //end
  };

  // functions for Pagination ==========================
  setPaginationPage = () => {
    if (this.state.newPage === false) {
      this.setState({ newPage: true, elemNum: [5, Infinity] });
    } else {
      this.setState({
        newPage: false,
        elemNum: [0, 7]
      });
    }
  };
  //====================== end =========================

  // drawing Table =====================================
  //render header of table
  renderTableHeader = () => {
    return this.props.data[0].map((naziv, i) => {
      return <th key={i}>{naziv}</th>;
    });
  };
  showPagination = () => {
    console.log("Length", this.state.group.length);
    if (this.state.group.length < 9) {
      this.setState({ showPagination: "none" });
    } else {
      this.setState({ showPagination: "" });
    }
  };
  //render td of table
  renderTableData = products => {
    return products.map((product, index) => {
      return (
        <tr key={index}>
          <td>
            <img src={slika} alt="" />
            {product.id}.
          </td>
          <td>{product.name}</td>
          <td>{product.pakovanje} </td>
          <td>{product.price.toFixed(2)} </td>
          <td>
            <button className="btn btn-secondary btn-sm" onClick={this.poziv}>
              Info
            </button>
          </td>
        </tr>
      );
    });
  };
  //===================== end ==========================

  grupaProizvoda = e => {
    if (e === 0) {
      const groupProducts = [
        ...this.props.data[1],
        ...this.props.data[2],
        ...this.props.data[3]
      ];
      this.setState({ group: groupProducts });
    } else {
      const groupProducts = this.props.data[e];
      this.setState({ group: groupProducts });
    }
  };
  render() {
    const products = this.state.group.slice(
      this.state.elemNum[0],
      this.state.elemNum[1]
    );
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
          <tbody>{this.renderTableData(products)}</tbody>
        </table>
        <Pagination
          prikaz={this.state.showPagination}
          newPage={this.state.newPage}
          clicked={this.setPaginationPage}
        />
      </div>
    );
  }
}
