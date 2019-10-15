import React, { Component } from "react";
import Buttons from "../../../UI/Button/Buttons";
import "./Product.scss";
import slika from "../../../components/AkcijskaReklama/img/djubrivo.jpg";

export default class Product extends Component {
  paragraph = () => {
    var text = this.props.product.description;
    const truncate = (str, len) =>
      str.substring(0, (str + " ").lastIndexOf(" ", len));
    // var shortText = text.substring(0, Infinity);
    return <p>{truncate(text, 100)}...</p>;
  };
  render() {
    return (
      <div className="product-main">
        <h2>{this.props.product.name}</h2>
        <div className="product">
          <div>
            <img src={slika} alt="slika" />
          </div>
          <div>
            {this.paragraph()}
            <Buttons>Saznaj više...</Buttons>
          </div>
        </div>
      </div>
    );
  }
}
