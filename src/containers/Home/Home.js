import React, { Component } from "react";
import "./Home.scss";
import Backdrop from "../../components/Bars/Backdrop/Backdrop";
import Product from "../Proizvodi/Product/Product";
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

  click = () => {
    this.props.history.push("/delatnosti");
  };
  click1 = () => {
    this.props.history.push("/o-nama");
  };
  click2 = () => {
    this.props.history.push("/proizvodi");
  };

  //Start the timer after 6 second, set render to true
  componentDidMount() {
    setTimeout(() => {
      this.setState({ prikazAkcijskeReklame: true });
    }, 6000);
  }

  removeCommentBox = () => {
    this.setState({
      prikazAkcijskeReklame: false,
      lista: true,
    });
  };
  close = () => {
    console.log("idemo");
  };
  render() {
    let naslov = <p>ORGANIC MINERAL Ca</p>;
    let listaProizvoda = this.setProductsList(naslov);
    let classCenter = this.state.lista ? "home__center move" : "home__center";

    return (
      <div className="home__div">
        <Card1 details={details} clicked={this.click1} />
        <div className={classCenter}>
          <Card2 details={details} />
        </div>
        <MarqueeBottom />
        {listaProizvoda}
        <Popup
          click2={this.click2}
          removeCommentBox={this.removeCommentBox}
          show={this.state.showPopup}
        />
        <Backdrop clicked={this.removeCommentBox} show={this.state.showPopup} />
      </div>
    );
  }

  setProductsList(naslov) {
    return this.state.lista ? (
      <div className="home__products">
        <h6>Proizvodi na akciji</h6>
        <div className="home__product">
          {data[1].map((product, index) => {
            return <Product key={index} product={data[1][index]} />;
          })}
        </div>
      </div>
    ) : null;
  }
}
