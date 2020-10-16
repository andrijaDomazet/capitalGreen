import React, { Component } from "react";
import "./Product.scss";
import Buttons from "../../UI/Button/Buttons";

export default class Product extends Component {
  state = { choosedProduct: "false" };
  paragraph = () => {
    var text = this.props.product.description;
    const truncate = (str, len) =>
      str.substring(0, (str + " ").lastIndexOf(" ", len));
    // var shortText = text.substring(0, Infinity);
    return <p>{truncate(text, 100)}...</p>;
  };
  poziv = (e) => {
    this.props.clicked("idemooo");
    console.log("redirect");

    // this.setState({
    //   desc: !this.state.desc,
    //   choosedProduct: !this.state.choosedProduct,
    // });
    console.log("idemooo", e.target.value);
  };
  render() {
    const product = this.props.product;
    const classes = this.props.classes;
    return (
      <div className={`product ${classes}`}>
        <div className="productName">
          <h2> {product.name}</h2>
        </div>
        <div className="productImg">
          <img src={process.env.PUBLIC_URL + `/example.jpg`} alt="no__image" />
        </div>
        <div className="productParagraph">{this.paragraph()}</div>
        <div className="productPack">{product.pakovanje}</div>
        <div className="productPrice">
          <div className="price1">{product.price}</div>
          <div className="price2">
            {Math.floor(product.price - product.price * 0.2).toFixed(2)}
          </div>
        </div>
        <div className="productButton">
          <Buttons
            className="btn btn-secondary btn-sm"
            value={product.id}
            clicked={this.poziv}
          >
            {classes === "product-main" ? "Saznaj više..." : "Info"}
          </Buttons>
        </div>
        <div
          className="product__desc"
          style={{
            display: this.state.choosedProduct ? "none" : "",
          }}
        >
          <p>
            <span>Opis proizvoda: </span>
            {product.description}
          </p>
          <p>
            <span>Po tretmanu: </span>
            {product.perTreatment}
          </p>
          <p>
            <span>Vreme primene: </span>
            {product.applicationTime}
          </p>
        </div>
      </div>
    );
  }
}
