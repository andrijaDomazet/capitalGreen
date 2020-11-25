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
import { readString } from "react-papaparse";
const str = `Column 1,Column 2,Column 3,Column 4
1-1,1-2,1-3,1-4
2-1,2-2,2-3,2-4
3-1,3-2,3-3,3-4
4,5,6,7`;

const res = readString(str);
const res2 = readString("../../eee.csv");
export default class Home extends Component {
  state = {
    showPopup: false,
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
    this.setState({
      showPopup: false,
    });
  };
  render() {
    return (
      <div className="home">
        <Card1
          details={details}
          clicked={() => {
            this.redirectFunc("aboutUs");
          }}
        />
        <Card2 details={details} />
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
    return (
      <div className="home__products">
        <h3>Proizvodi na akciji</h3>
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
    );
  }
  productsWithDiscounts = () => {
    let products = [...data[1], ...data[2], ...data[3]];
    let pwd = products.filter((a) => {
      return data[4].includes(a.id);
    });
    return pwd;
  };
}
