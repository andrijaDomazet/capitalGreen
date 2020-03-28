import React, { Component } from "react";
import "./Home.scss";
import Backdrop from "../../components/Bars/Backdrop/Backdrop";
import Product from "../Proizvodi/Product/Product";
import MarqueeBottom from "../../components/Marquee/MarqueeBottom";
import Banner2 from "../../components/Banner/Banner2";
import data from "../../allData";
import Card1 from "../../components/Cards/Card1";
import Card2 from "../../components/Cards/Card2";
import Popup from "../../components/Popup/Popup";

export default class Home extends Component {
  state = {
    products: [
      { id: 1, name: "Organic mineral Ca" },
      { id: 2, name: "	IDRON 20 20 20 +me" },
      { id: 3, name: "Organic mineral Ca" },
      { id: 4, name: "Folija" }
    ],
    prikazAkcijskeReklame: false,
    lista: true,
    lista1: true,
    lista2: false
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
  componentDidMount() {
    setTimeout(() => {
      //Start the timer
      this.setState({ prikazAkcijskeReklame: true }); //After 6 second, set render to true
    }, 5000);
  }

  removeCommentBox = () => {
    this.setState({
      prikazAkcijskeReklame: false,
      lista: true
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
        <Backdrop
          clicked={this.removeCommentBox}
          show={this.state.prikazAkcijskeReklame}
        />
        <Card1 click1={this.click1} />
        <div className={classCenter}>
          <Card2 />
        </div>
        <Popup
          click2={this.click2}
          removeCommentBox={this.removeCommentBox}
          show={this.state.prikazAkcijskeReklame}
        />
        <MarqueeBottom />
        {listaProizvoda}
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
