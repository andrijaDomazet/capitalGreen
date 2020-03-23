import React, { Component } from "react";
import "./News.scss";
export default class News extends Component {
  render() {
    let classes = this.props.small ? "newsDiv small" : "newsDiv";
    return (
      <div className={classes}>
        <p>
          <span>News1</span>
          Ministar Krkobabić: Zadrugari, pomozite starijima na selu. Zabrana
          kretanja: Kako do POSEBNIH POTVRDA za odlazak na njivu?
        </p>
      </div>
    );
  }
}
