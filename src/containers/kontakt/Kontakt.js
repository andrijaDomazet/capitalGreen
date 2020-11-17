import React from "react";
import KarticaLogo from "./Kartica-logo";
import "./Kontakt.scss";
import { details } from "../../shared/shared";
import Buttons from "../../UI/Button/Buttons";

const options = () => {
  return details.map((detail, index) => {
    return (
      <div key={index}>
        <span>{detail.title}</span>
        <input type="text" />
      </div>
    );
  });
};
const Kontakt = (props) => {
  return (
    <div className="contact">
      <div className="contact-info">
        Capital green doo | <span>Tel:</span> +381 64 5 222 333
        <span> Adresa:</span> | Franje Krča 144, Zemun |<span> MB: </span>
        21343455 |<span> PIB:</span> 110367480
      </div>
      <div className="contact__row-left">
        <KarticaLogo />
      </div>
      <div className="contact__row-right">
        <h1>Kontakt</h1>
        <h2>Za sva dodatna pitanja možete nas ovde kontaktirati.</h2>
        <form action="">{options()}</form>
        <Buttons children="Pošalji" />
      </div>
    </div>
  );
};

export default Kontakt;
