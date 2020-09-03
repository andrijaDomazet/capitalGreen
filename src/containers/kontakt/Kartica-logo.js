import React from "react";
import Logo from "../../img/logo.png";
import "./Kontakt.scss";

const KarticaLogo = (props) => {
  return (
    <React.Fragment>
      <div className="kartica__logo">
        <div className="flex-slika">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <h5>Vaš partner na putu ka modernoj poljoprivrednoj proizvodnji!</h5>
    </React.Fragment>
  );
};

export default KarticaLogo;
