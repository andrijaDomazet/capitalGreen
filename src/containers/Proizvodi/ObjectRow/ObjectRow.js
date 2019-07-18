import React, { Component } from "react";
import "./ObjectRow.scss";
import Jumbo from "../../../components/Jumbo/Jumbo";
import Selection from "../../../components/Selection/Selection";

export default class ObjectRow extends Component {
  state = {
    value: "select"
  };

  //render for header of table
  renderTableHeader = () => {
    return this.props.data.naziviKolona.map((naziv, i) => {
      return <th key={i}>{naziv}</th>;
    });
  };

  //render for td for table
  renderTableData = () => {
    return this.props.data.djubriva.map((proizvod, id) => {
      return (
        <tr key={proizvod.id}>
          <td>{proizvod.id}</td>
          <td>{proizvod.nazivProizvoda} </td>
          <td>{proizvod.pakovanje} </td>
          <td>{proizvod.mpCena.toFixed(2)} </td>
          <td>
            <button className="btn btn-secondary btn-sm" onClick={this.poziv}>
              Info
            </button>
          </td>
        </tr>
      );
    });
  };

  poziv = () => {
    console.log("idemooo");
  };
  change = event => {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  };
  render() {
    const { data } = this.props;
    console.log(data.djubriva[0].id);

    return (
      <div className="objectRow">
        <div className="proizvodiJumbo">
          <Jumbo />
        </div>
        <h3>Izaberite grupu proizvoda:</h3> {<Selection />}
        <table>
          <thead>
            <tr>{this.renderTableHeader()}</tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}
