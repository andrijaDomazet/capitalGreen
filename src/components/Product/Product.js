import React, { Component } from "react";
import Buttons from "../../../UI/Button/Buttons";
import "./Product.scss";
import slika from "../../../components/Popup/img/djubrivo.jpg";

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
          {this.paragraph()}
          <div>
            <div className="productPrice">
              <div className="price1">{this.props.product.price}</div>
              <div className="price2">
                {Math.floor(
                  this.props.product.price - this.props.product.price * 0.2
                ).toFixed(2)}
              </div>
            </div>
            <Buttons>Saznaj više...</Buttons>
          </div>
        </div>
      </div>
    );
  }
}
