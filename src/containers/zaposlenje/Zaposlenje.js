import React, { Component } from "react";
import "./Zaposlenje.scss";

export default class Zaposlenje extends Component {
  state = {
    value: "",
    potvrdaTiketa: false,
    odigraniBrojevi: [1, 2, 3],
    dodatiTiket: [],
    choise: false
  };

  //funkcija za potvrdu tiketa
  click = () => {
    this.setState({ potvrdaTiketa: true });
  };

  //funkcija kojom se dodaju izabrani brojevi
  selectedNumber = () => {
    if (this.state.odigraniBrojevi.length < 5) {
      // this.setState({ choise: !this.state.choise });
      this.setState(state => {
        const odigraniBrojevi = [...state.odigraniBrojevi, state.value];

        return {
          odigraniBrojevi,
          value: ""
        };
      });
    } else {
      this.setState({
        dodatiTiket: [...this.state.dodatiTiket, this.state.odigraniBrojevi]
      });
      console.log("Popunjentiket");
    }
  };

  dodavanjeTiketa = () => {
    console.log("dodavanje tiketa");
    return this.state.odigraniBrojevi.map((broj, index) => {
      return <button key={index}>{broj}</button>;
    });
  };

  render() {
    let tiket = this.state.potvrdaTiketa ? this.dodavanjeTiketa() : null;
    console.log(this.state.odigraniBrojevi);

    let colorChange = this.state.choise ? { background: "red" } : null;
    var row1 = [];
    for (var i = 1; i <= 30; i++) {
      row1.push(i);
    }

    var row2 = [];
    for (var n = 1; n <= 12; n++) {
      row2.push(n);
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-7">
            <div className="izvlacenje">
              {row2.map((e, index) => {
                return (
                  <div className="izvuceniBrojevi" key={index}>
                    {e}
                  </div>
                );
              })}
            </div>

            <div className="dodatiTiketi">
              <div>{tiket}</div>
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className="col-sm-5">
            <div>
              {row1.map((e, index) => {
                return (
                  <button
                    onClick={this.selectedNumber}
                    // className={"btn"}
                    style={colorChange}
                    key={index}
                  >
                    {e}
                  </button>
                );
              })}
            </div>
            <button className="btn-potvrda" onClick={this.click}>
              Dodaj tiket
            </button>
          </div>
        </div>
      </div>
    );
  }
}
