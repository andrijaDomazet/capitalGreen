import React from "react";
import "./Products.scss";
import Data from "../../allData";
import Table from "../../components/Table/Table";
import Banner from "../../components/Banner/Banner";

export default class Products extends React.Component {
  state = {
    data: Data,
  };
  render() {
    return (
      <div className="products">
        <Banner index="0" />
        <Table data={this.state.data} />
      </div>
    );
  }
}
