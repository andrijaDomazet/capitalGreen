import React, { Component } from "react";
import "./InfoReklama.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import Slika from "./img/djubrivo.jpg";

export default class InfoReklama extends Component {
  render() {
    let infoClasses = "infoObjekta";
    if (this.props.show) {
      infoClasses = "infoObjekta open";
    }
    // const { name, img } = this.props.podaci;

    return (
      <div className={infoClasses}>
        <Card className="row">
          <CardImg
            top
            style={{ width: "20vw", height: "auto" }}
            src={Slika}
            alt="Card image cap"
          />
          <CardBody>
            {/* <CardTitle>Card title</CardTitle> */}
            <CardSubtitle>
              ORGANIC MINERAL Ca +NK+Mg+B+ AMINOKISELINE
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Info</Button>
          </CardBody>
        </Card>
        <div className="infoDiv">
          <span className="close-btn" onClick={this.props.removeCommentBox}>
            <i className="fa fa-window-close" />
          </span>
        </div>
      </div>
    );
  }
}
