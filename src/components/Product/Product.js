import React, { Component } from "react";
import "./Product.scss";
import Buttons from "../../UI/Button/Buttons";

export default class Product extends Component {
  state = { choosedProduct: "false" };
  paragraph = () => {
    var text = this.props.product.description;
    const truncate = (str, len) =>
      str.substring(0, (str + " ").lastIndexOf(" ", len));
    return <p>{truncate(text, 100)}...</p>;
  };

  poziv = (e) => {
    if (e === "info") {
      this.setState({
        desc: !this.state.desc,
        choosedProduct: !this.state.choosedProduct,
      });
    } else {
      this.props.clicked("idemooo");
      console.log("redirect");
    }
  };
  //func product price difference
  productPrice = (product) => {
    if (this.props.pwd.includes(product.id)) {
      return (
        <div className="productPrice">
          <div className="oldPrice">{product.price} din</div>
          <div className="price2">
            {Math.floor(product.price - product.price * 0.2).toFixed(2)} din
          </div>
        </div>
      );
    } else {
      return (
        <div className="productPrice">
          <div className="price1">{product.price} din</div>
        </div>
      );
    }
  };
  render() {
    const { product, classes } = this.props;
    return (
      <div className={`product ${classes}`}>
        <div className="product-top">
          <div className="productName">
            <h4> {product.name}</h4>
          </div>
          <div className="productImg">
            <img
              src={process.env.PUBLIC_URL + `/example.jpg`}
              alt="no__image"
            />
          </div>
          <div className="productParagraph">{this.paragraph()}</div>
          <div className="productPack">{product.pakovanje}</div>
          {this.productPrice(product)}
          <div className="productButton">
            <Buttons
              className="btn btn-secondary btn-sm"
              value={product.id}
              clicked={() => {
                this.poziv("info");
              }}
            >
              {classes === "product__home" ? "Saznaj više..." : "Info"}
            </Buttons>
          </div>
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
