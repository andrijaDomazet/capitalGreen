import React from "react";
import Logo from "./img/logo.jpg";
import "./Kontakt.scss";

const KarticaLogo = props => {
  return (
    <React.Fragment>
      <div className="kartica__logo">
        <div className="flex-slika">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="flex">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.9541676458994!2d20.40913961500631!3d44.80212267909863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6f92363f1881%3A0x550c0955fccddcc2!2sSavski+nasip+7%2C+Beograd+11070!5e0!3m2!1sen!2srs!4v1561017703799!5m2!1sen!2srs"
            frameBorder="0"
            allowFullScreen
          /> */}
        </div>
      </div>
      <h5>Vaš partner na putu ka modernoj poljoprivrednoj proizvodnji!</h5>
    </React.Fragment>
  );
};

export default KarticaLogo;
