import React, { Component } from "react";
import "./Popup.scss";
import slika1 from "./img/prvaStrana.jpg";
import Slika2 from "./img/drugaStrana.jpg";
import folija from "./img/folija.jpg";
import zastita from "./img/zastita.jpg";

export default class Popup extends Component {
  state = {
    order: [slika1, folija, zastita],
    page: 1,
  };
  changeFlayer = (f) => {
    let arr = [];
    let e = this.state.order.indexOf(f);
    arr[0] = f;
    arr[e] = this.state.order[0];
    e === 1 ? (arr[2] = this.state.order[2]) : (arr[1] = this.state.order[1]);
    this.setState({ order: arr });
  };
  picturePos = () => {
    return this.state.page === 1 ? folija : Slika2;
  };
  changePage = (page) => {
    if (page !== this.state.page) {
      this.state.page === 1
        ? this.setState({ page: 2 })
        : this.setState({ page: 1 });
    }
  };
  render() {
    const { show } = this.props;
    let infoClasses = show ? "action__product open" : "action__product";
    return (
      <div className={infoClasses}>
        <img
          className="centralImg"
          src={this.state.order[0]}
          alt="noPicture"
          onClick={this.changePage}
        />
        <div className="info-close" onClick={this.props.removeCommentBox}>
          <i className="fas fa-times" />
        </div>
        <div className="changePage">
          <i
            className="fas fa-chevron-circle-left"
            onClick={() => {
              this.changePage(1);
            }}
          ></i>
          <span>{this.state.page} / 2</span>
          <i
            className="fas fa-chevron-circle-right"
            onClick={() => {
              this.changePage(2);
            }}
          ></i>
        </div>
        <div className="test">
          <div
            className="left"
            onClick={() => {
              this.changeFlayer(this.state.order[1]);
            }}
          >
            <img className="folija" src={this.state.order[1]} alt="" />
          </div>
          <div
            className="right"
            onClick={() => {
              this.changeFlayer(this.state.order[2]);
            }}
          >
            <img className="zastita" src={this.state.order[2]} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
