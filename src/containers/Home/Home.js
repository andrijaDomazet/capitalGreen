import React, { Component } from "react";
import "./Home.scss";
import Backdrop from "../../components/Bars/Backdrop/Backdrop";
import Product from "../../components/Product/Product";
import MarqueeBottom from "../../components/Marquee/MarqueeBottom";
import data from "../../allData";
import details from "../../details.json";
import Card1 from "../../components/Cards/Card1";
import Card2 from "../../components/Cards/Card2";
import Popup from "../../components/Popup/Popup";

export default class Home extends Component {
  state = {
    showPopup: false,
    lista: true,
  };

  redirectFunc = (page) => {
    return page === "aboutUs"
      ? this.props.history.push("/o-nama")
      : this.props.history.push("/proizvodi");
  };

  //Start the timer after 6 second, set render to true
  componentDidMount() {
    setTimeout(() => {
      this.setState({ showPopup: true });
    }, 6000);
  }

  removeCommentBox = () => {
    console.log("E");

    this.setState({
      showPopup: false,
      // lista: true,
    });
  };
  render() {
    let classCenter = this.state.lista ? "home__center move" : "home__center";
    return (
      <div className="home">
        <Card1
          details={details}
          clicked={() => {
            this.redirectFunc("aboutUs");
          }}
        />
        <div className={classCenter}>
          <Card2 details={details} />
        </div>
        <MarqueeBottom />
        {this.setProductsList()}
        <Popup
          click2={this.click2}
          removeCommentBox={this.removeCommentBox}
          show={this.state.showPopup}
        />
        <Backdrop clicked={this.removeCommentBox} show={this.state.showPopup} />
      </div>
    );
  }

  setProductsList() {
    return this.state.lista ? (
      <div className="home__products">
        <h4>Proizvodi na akciji</h4>
        <div className="home__product">
          {this.productsWithDiscounts().map((product, index) => {
            return (
              <Product
                classes="product__home"
                key={index}
                clicked={() => {
                  this.redirectFunc();
                }}
                product={product}
                pwd={data[4]}
              />
            );
          })}
        </div>
      </div>
    ) : null;
  }
  productsWithDiscounts = () => {
    let products = [...data[1], ...data[2], ...data[3]];
    let pwd = products.filter((a) => {
      return data[4].includes(a.id);
    });
    return pwd;
  };
}
