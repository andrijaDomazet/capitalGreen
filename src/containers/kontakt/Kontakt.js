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
      <div className="contact__row-left">
        <KarticaLogo />
      </div>
      <div className="contact__row-right">
        <form action="">{options()}</form>
        <Buttons children="Pošalji" />
      </div>
    </div>
  );
};

export default Kontakt;
