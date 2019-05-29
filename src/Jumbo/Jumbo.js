import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./Jumbo.css";
import Slika1 from "../Jumbo/img/salad.jpg";

const Jumbo = props => {
  return (
    <div className="jumbo">
      <Jumbotron
        fluid
        style={{
          backgroundImage: `url(${Slika1})`,
          backgroundSize: "cover",
          maxHeight: "45vh"
        }}
      >
        <Container fluid>
          <h1
            className="display-3 "
            style={{ color: "white", fontSize: "2rem" }}
          >
            CAPITAL GREEN
          </h1>
          <p className="lead" style={{ color: "white" }}>
            Vaš partner na putu ka modernoj poljoprivrednoj proizvodnji!
          </p>
          <p className="lead" style={{ color: "white" }}>
            Želimo Vam dobrodošlicu na sajt sektora za poljoprivredna rešenja
            kompanije Capital Green. Ovde možete pronaći sve stručne informacije
            o profesionalnoj proizvodnji i zaštiti bilja, a koje mogu biti
            korisne za Vas i Vaše poslovanje.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
