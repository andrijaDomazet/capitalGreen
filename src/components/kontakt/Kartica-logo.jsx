import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import Logo from "./img/logo.jpg";

const KarticaLogo = props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          src={Logo}
          alt="Card image cap"
          style={{ width: "20vw", height: "auto" }}
        />
        <CardBody>
          <CardText>
            Vaš partner na putu ka modernoj poljoprivrednoj proizvodnji!
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default KarticaLogo;
