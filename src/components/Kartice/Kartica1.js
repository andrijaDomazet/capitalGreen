import React from "react";
import "./Kartice.scss";
import Buttons from "../../UI/Button/Buttons";
import { withRouter } from "react-router-dom";

function Kartica1(props) {
  const { click1 } = props;

  return (
    <div className="kartica1-div">
      <div className="kartica1">
        <h2>DOBRODOŠLI NA NAŠ SAJT!</h2>
        <p className="kartica1-tekst">
          Na našem sajtu možete se upoznati sa prodajnim asortimanom, novim
          tehnologijama u poljoprivredi, kao i inovativnim načinom uzgoja
          biljaka. Pogledajte našu ponudu i izaberite samo najbolje.
        </p>

        <Buttons clicked={click1}>O nama</Buttons>
      </div>
    </div>
  );
}
export default withRouter(Kartica1);
