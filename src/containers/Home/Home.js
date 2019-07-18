import React, { Component } from "react";
import InfoReklama from "../../components/InfoReklama/InfoReklama";
import "./Home.scss";
import Kartica1 from "./Kartica1";
import Kartica2 from "./Kartica2";

export default class Home extends Component {
  state = {
    prikazInfoObjekta: false,
    lista: false
  };

  click = () => {
    this.props.history.push("/delatnosti");
  };
  click1 = () => {
    this.props.history.push("/o-nama");
  };

  componentDidMount() {
    setTimeout(
      function() {
        //Start the timer
        this.setState({ prikazInfoObjekta: true }); //After 6 second, set render to true
      }.bind(this),
      10000
    );
  }

  removeCommentBox = () => {
    this.setState({
      prikazInfoObjekta: false,
      lista: true
    });
  };

  render() {
    console.log("props", this.props);

    //povezati naslov sa state na infoReklami!!!!!!!!!!!!!!!!!
    let naslov = <p>ORGANIC MINERAL Ca</p>;
    let listaProizvoda = this.kreiranjeListeProizvoda(naslov);
    return (
      <div className="row home-div">
        <div className="col-sm-6 home-left">
          <Kartica1 click1={this.click1} />
        </div>
        <div className="col-sm-4 home-center">
          <Kartica2 />
        </div>
        {listaProizvoda}
        <InfoReklama
          click={this.click}
          removeCommentBox={this.removeCommentBox}
          show={this.state.prikazInfoObjekta}
        />
      </div>
    );
  }

  kreiranjeListeProizvoda(naslov) {
    return this.state.lista ? (
      <div className="col sm-2 home-right">
        <h4>Proizvodi</h4> {naslov}
      </div>
    ) : null;
  }
}
