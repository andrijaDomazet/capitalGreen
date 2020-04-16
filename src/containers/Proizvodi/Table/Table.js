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
      ...this.props.data[3],
    ],

    //state for pagination
    pageNum: 1,
    operationPerPage: 6,
    elemNum: [0, 5],
    //end
  };

  // functions for Pagination ==========================
  componentDidMount = () => {
    this.updatePageNumber();
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.group !== prevState.group) {
      // update the state
      this.updatePageNumber();
    }
  };
  updatePageNumber = () => {
    this.setState({
      numberOfPages: Math.ceil(
        this.state.group.length / this.state.operationPerPage
      ),
    });
  };
  setPaginationPage = (page) => {
    this.setState({
      elemNum: [
        (page - 1) * 5,
        (page - 1) * 5 + this.state.operationPerPage - 1,
      ],
      pageNum: page,
    });
    return this.state.group.slice(this.state.elemNum[0], this.state.elemNum[1]);
  };
  //funkcija kojom se odredjuje da li ce se prikazati pagination
  showPagination = () => {
    return this.state.group.length < this.state.operationPerPage ? "none" : "";
  };
  //====================== end =========================

  // drawing Table =====================================
  //render header of table
  renderTableHeader = () => {
    return this.props.data[0].map((naziv, i) => {
      return <th key={i}>{naziv}</th>;
    });
  };
  //render td of table
  renderTableData = (products) => {
    return products.map((product, index) => {
      return (
        <tr key={index}>
          <td>
            <img src={slika} alt="no__image" />
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

  grupaProizvoda = (e) => {
    if (e === 0) {
      const groupProducts = [
        ...this.props.data[1],
        ...this.props.data[2],
        ...this.props.data[3],
      ];
      this.setState({ group: groupProducts });
    } else {
      const groupProducts = this.props.data[e];
      this.setState({ group: groupProducts });
    }
  };
  render() {
    // this.showPagination = this.showPagination.bind(this);
    const products = this.state.group.slice(
      this.state.elemNum[0],
      this.state.elemNum[1]
    );
    return (
      <div className="table">
        {<Selection changeGroup={this.grupaProizvoda} />}
        <table>
          <thead>
            <tr>{this.renderTableHeader()}</tr>
          </thead>
          <tbody>{this.renderTableData(products)}</tbody>
        </table>
        <Pagination
          numberOfPages={this.state.numberOfPages}
          pageNum={this.state.pageNum}
          clicked={this.setPaginationPage}
        />
      </div>
    );
  }
}
