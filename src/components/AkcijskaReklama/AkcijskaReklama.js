import React, { PureComponent } from "react";
import "./AkcijskaReklama.scss";
import Slika from "./img/prvaStrana.jpg";
import Buttons from "../../UI/Button/Buttons";

const Naslov = props => {
  return (
    <div>
      <h2>{props.children}</h2>
    </div>
  );
};

export default class AkcijskaReklama extends PureComponent {
  state = {
    val: "ORGANIC MINERAL Ca"
  };
  click = () => {
    console.log("idemo");
  };
  render() {
    const { click2, show } = this.props;
    let infoClasses = show ? "infoObjekta open" : "infoObjekta";

    return (
      <div className={infoClasses}>
        <div className="info-picture">
          <img src={Slika} alt="slika" />
        </div>
        <div className="info-text">
          <h1>AKCIJSKA PONUDA !!!</h1>
          {<Naslov>{this.state.val}</Naslov>}
          <p>
            NPK vodootopiva đubriva koriste se kroz sistem za navodnjavanje za
            prehranu kultura. Ova đubriva sadrže različite kombinacije makro i
            mikroelemenata za sve faze proizvodnje.
          </p>
          <Buttons clicked={click2}>Saznaj više...</Buttons>
        </div>
        <div className="info-close" onClick={this.props.removeCommentBox}>
          <i className="fas fa-times" />
        </div>
      </div>
    );
  }
}
