import React, { Component } from "react";
import AkcijskaReklama from "../../components/AkcijskaReklama/AkcijskaReklama";
import "./Home.scss";
import Kartica1 from "./Kartica1";
import Kartica2 from "./Kartica2";
import Backdrop from "../../components/Backdrop/Backdrop";
import Product from "../Proizvodi/Product/Product";
import News from "../../components/News/News";
import Banner2 from "../../components/Banner/Banner2";

export default class Home extends Component {
  state = {
    products: [
      { id: 1, name: "Organic mineral Ca" },
      { id: 2, name: "	IDRON 20 20 20 +me" },
      { id: 3, name: "Organic mineral Ca" },
      { id: 4, name: "Folija" }
    ],
    prikazAkcijskeReklame: false,
    lista: false,
    lista1: true,
    lista2: false
  };

  click = () => {
    this.props.history.push("/delatnosti");
  };
  click1 = () => {
    this.props.history.push("/o-nama");
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
    let listaProizvoda = this.kreiranjeListeProizvoda(naslov);
    let classCenter = this.state.lista
      ? "col-sm-4 home-center move"
      : "col-sm-4 home-center";
    return (
      <div>
        <Backdrop
          clicked={this.removeCommentBox}
          show={this.state.prikazAkcijskeReklame}
        />
        <div className="row home-div">
          <Banner2 small={this.state.lista} />
          <div className="col-sm-6 home-left">
            <Kartica1 click1={this.click1} />
          </div>
          <div className={classCenter}>
            <Kartica2 />
          </div>
          <AkcijskaReklama
            click={this.click}
            removeCommentBox={this.removeCommentBox}
            show={this.state.prikazAkcijskeReklame}
          />
          <News small={this.state.lista} />
          {listaProizvoda}
        </div>
      </div>
    );
  }

  kreiranjeListeProizvoda(naslov) {
    return this.state.lista ? (
      <div className="home-right">
        <h6>Proizvodi na akciji</h6>
        {this.state.products.map((product, index) => {
          return <Product key={index} product={this.state.products[index]} />;
        })}
      </div>
    ) : null;
  }
}
