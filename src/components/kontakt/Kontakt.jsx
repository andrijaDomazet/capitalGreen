import React from "react";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
import KarticaLogo from "./Kartica-logo";

const Kontakt = props => {
  return (
    <div class="row">
      <div className="col-sm-6">
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Ime i prezime</InputGroupText>
          </InputGroupAddon>
          <Input />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>E-mail adresa</InputGroupText>
          </InputGroupAddon>
          <Input />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Vaša poruka</InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Unesite Vašu poruku..." />
        </InputGroup>
      </div>
      <div className="col-sm-6">
        <KarticaLogo />
      </div>
    </div>
  );
};

export default Kontakt;
