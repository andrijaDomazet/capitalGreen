import React, { Component } from "react";
import Buttons from "../../../UI/Button/Buttons";
import "./Product.scss";
import slika from "../../../components/AkcijskaReklama/img/djubrivo.jpg";
import data from "../../../allData";
export default class Product extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Organic mineral Ca",
        slika: slika
      }
    ]
  };
  paragraph = () => {
    var text = `NPK vodootopiva đubriva koriste se kroz sistem za navodnjavanje za prehranu kultura. Ova đubriva sadrže različite kombinacije makro i mikroelemenata za sve faze proizvodnje. `;
    const truncate = (str, len) =>
      str.substring(0, (str + " ").lastIndexOf(" ", len));
    // console.log(truncate(text, 100));
    // var shortText = text.substring(0, Infinity);
    return <p>{truncate(text, 100)}...</p>;
  };
  render() {
    console.log(this.props.product.name);
    console.log(data);

    return (
      <div className="product-main">
        <h2>{this.props.product.name}</h2>
        <div className="product">
          <div>
            <img src={this.state.products[0].slika} alt="slika" />
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
