import React from "react";
import Logo from "../../../img/logo.png";
import "../Kontakt.scss";

const KarticaLogo = () => {
  return (
    <div className="kartica__logo">
      <div className="flex-slika">
        <img src={Logo} alt="Logo" />
      </div>
      <h2>Vaš partner na putu ka modernoj poljoprivrednoj proizvodnji!</h2>
    </div>
  );
};

export default KarticaLogo;
