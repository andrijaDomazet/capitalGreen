import React from "react";
import "./Proizvodi.scss";
import Data from "../../allData";
import Table from "../../components/Table/Table";
import Banner from "../../components/Banner/Banner";

export default class Proizvodi extends React.Component {
  state = {
    data: Data,
  };
  render() {
    return (
      <div className="products">
        <Banner />
        <Table data={this.state.data} />
      </div>
    );
  }
}
