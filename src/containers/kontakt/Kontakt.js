import React from "react";
import KarticaLogo from "./Kartica-logo";
import "./Kontakt.scss";
const options = () => {
  return details.map((detail, index) => {
    return (
      <div key={index}>
        <span>{detail.title}</span> <input type="text" />
      </div>
    );
  });
};
const Kontakt = props => {
  return (
    <div className="contact__row">
      <div className="contact__row-left">
        <KarticaLogo />
      </div>
      <div className="contact__row-right">
        <form action="">{options()}</form>
      </div>
    </div>
  );
};

export default Kontakt;
const details = [
  { title: "Ime i prezime" },
  { title: "E-mail adresa" },
  { title: "Vaša poruka" }
];
