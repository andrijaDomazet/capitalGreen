import React from "react";
import KarticaLogo from "./Kartica-logo";
import "./Kontakt.scss";

const Kontakt = props => {
  return (
    <div className="contact__row">
      <div className="contact__row-left">
        <KarticaLogo />
      </div>
      <div className="contact__row-right">
        <form action="">
          {"Ime i prezime"}
          <input type="text" />
          <br /> <br />
          {"E-mail adresa"}
          <input type="text" />
          <br /> <br />
          {"Vaša poruka"}
          <input type="text" />
        </form>
      </div>
    </div>
  );
};

export default Kontakt;
