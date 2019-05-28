import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./Jumbo";
import Slika1 from "../Jumbo/img/salad.jpg";

const Jumbo = props => {
  return (
    <div>
      <Jumbotron
        fluid
        style={{
          backgroundImage: `url(${Slika1})`,
          backgroundSize: "cover",
          height: "auto"
        }}
      >
        <Container fluid>
          <h1 className="display-3 " style={{ color: "white" }}>
            CAPITAL GREEN
          </h1>
          <p className="lead" style={{ color: "white" }}>
            Đubrivo je smeša materija koje se koriste u poljoprivredi ili
            vrtlarstvu za poboljšanje rasta biljki.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
