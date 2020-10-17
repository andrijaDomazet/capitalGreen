import React, { Component } from "react";
import "./Popup.scss";
import Slika1 from "./img/prvaStrana.jpg";
import Slika2 from "./img/drugaStrana.jpg";

export default class Popup extends Component {
  state = {
    page: 1,
  };
  picturePos = () => {
    return this.state.page === 1 ? Slika1 : Slika2;
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
        <img src={this.picturePos()} alt="noPicture" />
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
      </div>
    );
  }
}
