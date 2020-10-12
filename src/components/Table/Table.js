import React, { Component } from "react";
import "./Table.scss";
import Selection from "../Selection/Selection";
import Pagination from "../../UI/Pagination/Pagination";
import Popup from "../Popup/Popup";
import Product from "./Product";

export default class Table extends Component {
  state = {
    group: [
      ...this.props.data[1],
      ...this.props.data[2],
      ...this.props.data[3],
    ],
    // desc: true,
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
    this.scrollTop.scrollIntoView({ behavior: "smooth" });
  };
  //funkcija kojom se odredjuje da li ce se prikazati pagination
  //trenutno nije aktivna
  showPagination = () => {
    return this.state.group.length < this.state.operationPerPage ? "none" : "";
  };
  //====================== end =========================

  // drawing Table =====================================
  //render header
  renderTableHeader = () => {
    return (
      <div className="product__header">
        {this.props.data[0].map((naziv, i) => {
          return <div key={i}>{naziv}</div>;
        })}
      </div>
    );
  };
  //render products
  renderTableData = (products) => {
    return products.map((product, index) => {
      return <Product product={product} />;
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
  removeCommentBox = () => {
    this.setState({
      showPopup: false,
    });
  };
  //======================== end ==============================
  render() {
    return (
      <div
        className="table__main"
        ref={(e) => {
          this.scrollTop = e;
        }}
      >
        {<Selection changeGroup={this.grupaProizvoda} />}
        {this.renderTableHeader()}
        {this.renderTableData(this.getProductsList())}

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
