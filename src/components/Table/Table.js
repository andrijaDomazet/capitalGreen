import React, { Component } from "react";
import "./Table.scss";
import Selection from "../Selection/Selection";
import slika from "../../img/logo.png";
import Pagination from "../../UI/Pagination/Pagination";
import Popup from "../Popup/Popup";

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

    showPopup: false,
    choosedProduct: 0,
  };

  // functions for Pagination ==========================
  componentDidMount = () => {
    this.setPageNumber();
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.group !== prevState.group) {
      this.setState({ pageNum: 1 });
      this.setPageNumber();
      this.setPaginationPage(1);
    }
  };
  setPageNumber = () => {
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
  //trenutno nije aktivna
  showPagination = () => {
    return this.state.group.length < this.state.operationPerPage ? "none" : "";
  };
  //====================== end =========================

  // drawing Table =====================================
  //render table header
  renderTableHeader = () => {
    return this.props.data[0].map((naziv, i) => {
      return <th key={i}>{naziv}</th>;
    });
  };
  //render td
  renderTableData = (products) => {
    return products.map((product, index) => {
      return (
        <tr key={index}>
          <td>
            <img src={process.env.PUBLIC_URL + `/logo.png`} alt="no__image" />
            {/* {product.id}. */}
          </td>
          <td>{product.name}</td>
          <td>{product.pakovanje} </td>
          <td>{product.price.toFixed(2)} </td>
          <td>
            <button
              className="btn btn-secondary btn-sm"
              value={product.id}
              onClick={this.poziv}
            >
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
  //========================== end ============================
  // functions for open and close Popup
  poziv = (e) => {
    this.setState({ showPopup: true, choosedProduct: e.target.value });

    console.log("idemooo", e.target.value);
  };
  removeCommentBox = () => {
    this.setState({
      showPopup: false,
      // lista: true,
    });
  };
  //======================== end ==============================
  render() {
    return (
      <div className="table__main">
        {<Selection changeGroup={this.grupaProizvoda} />}
        <table>
          <thead>
            <tr>{this.renderTableHeader()}</tr>
          </thead>
          <tbody>{this.renderTableData(this.getProductsList())}</tbody>
        </table>
        <Pagination
          numberOfPages={this.state.numberOfPages}
          pageNum={this.state.pageNum}
          clicked={this.setPaginationPage}
        />
        <Popup
          show={this.state.showPopup}
          removeCommentBox={this.removeCommentBox}
          details={this.state.group[this.state.choosedProduct]}
        />
      </div>
    );
  }

  getProductsList() {
    return this.state.group.slice(this.state.elemNum[0], this.state.elemNum[1]);
  }
}
