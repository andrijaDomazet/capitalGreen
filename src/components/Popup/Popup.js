import React, { Component } from "react";
import "./Popup.scss";
import slika1 from "./img/prvaStrana.jpg";
import slika2 from "./img/drugaStrana.jpg";
import folija from "./img/folija.jpg";
import zastita from "./img/zastita.jpg";

export default class Popup extends Component {
  state = {
    order: [slika1, folija, zastita],
    page: 1,
  };
  //changing main flayer
  changeFlayer = (f) => {
    let arr = [];
    let e = this.state.order.indexOf(f);
    arr[0] = f;

    arr[e] = this.state.order[0];
    e === 1 ? (arr[2] = this.state.order[2]) : (arr[1] = this.state.order[1]);
    console.log(arr);

    this.setState({ order: arr });
  };
  //funcs for rotate flayer !TODOOO!
  picturePos = () => {
    return this.state.page === 1 ? folija : slika2;
  };
  changePage = () => {
    if (this.state.page === 1 && this.state.order[0] === slika1) {
      let arr = [];
      let e = this.state.order.indexOf(slika1);
      arr = [slika2, this.state.order[1], this.state.order[2]];
      this.setState({ order: arr, page: 2 });
    } else if (this.state.page === 2 && this.state.order[0] == slika2) {
      let arr = [];
      let e = this.state.order.indexOf(slika2);
      arr = [slika1, this.state.order[1], this.state.order[2]];
      this.setState({ order: arr, page: 1 });
    }
  };
  //end
  //setting popup showing class
  setPopup = (show) => {
    return show ? "action__product open" : "action__product";
  };
  render() {
    return (
      <div className={this.setPopup(this.props.show)}>
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
              this.changePage();
            }}
          ></i>
          <span>
            {this.state.page} /{" "}
            {this.state.order[0] === slika1 || slika2 ? 2 : 1}
          </span>
          <i
            className="fas fa-chevron-circle-right"
            onClick={() => {
              this.changePage();
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
            <img src={this.state.order[1]} alt="" />
          </div>
          <div
            className="right"
            onClick={() => {
              this.changeFlayer(this.state.order[2]);
            }}
          >
            <img src={this.state.order[2]} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
