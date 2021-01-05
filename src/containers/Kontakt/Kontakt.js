import React from "react";
import KarticaLogo from "./Assets/Kartica-logo";
import "./Kontakt.scss";
import { details } from "../../shared/shared";
import DocumentMeta from "react-document-meta";
import { Animated } from "react-animated-css";

const options = () => {
  return details.map((detail, index) => {
    return (
      <div key={index}>
        <span>{detail.title}</span>
        <input type="text" name={detail.name} />
      </div>
    );
  });
};
const meta = {
  title: "Kontakt Capital green doo",
  description: "Kontakt informacije kompanije Capital green",
  canonical: "https://capitalgreen.rs/#/kontakt",
  meta: {
    charset: "utf-8",
    name: {
      keywords:
        "capital green srbija, capital green beograd, kotakt telefon, radno vreme",
    },
  },
};
const Kontakt = (props) => {
  return (
    <DocumentMeta {...meta}>
      <Animated
        animationIn="fadeInLeft"
        animationOut="fadeOut"
        animationInDuration={1200}
        animationOutDuration={1000}
        isVisible={true}
      >
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
            <h3>Kontakt</h3>
            <h4>Za sva dodatna pitanja možete nas ovde kontaktirati.</h4>
            <form
              action="mailto:office@capitalgreen.rs"
              method="POST"
              encType="multipart/form-data"
              name="EmailForm"
            >
              {options()}
              <input type="submit" value="Pošalji" />
            </form>
          </div>
        </div>
      </Animated>
    </DocumentMeta>
  );
};

export default Kontakt;
