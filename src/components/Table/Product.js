import React, { Component } from "react";

export default class Product extends Component {
  state = { choosedProduct: "false" };
  poziv = (e) => {
    this.setState({
      desc: !this.state.desc,
      choosedProduct: !this.state.choosedProduct,
    });
    console.log("idemooo", e.target.value);
  };
  render() {
    const product = this.props.product;
    return (
      <div className="product">
        <div className="product-basic">
          <div>
            <img
              src={process.env.PUBLIC_URL + `/example.jpg`}
              alt="no__image"
            />
          </div>
          <div>
            <h2> {product.name}</h2>
          </div>
          <div>{product.pakovanje}</div>
          <div>{product.price.toFixed(2)} din</div>
          <div>
            <button
              className="btn btn-secondary btn-sm"
              value={product.id}
              onClick={this.poziv}
            >
              Info
            </button>
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
