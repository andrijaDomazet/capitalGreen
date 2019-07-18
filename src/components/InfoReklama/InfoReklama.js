import React, { PureComponent } from "react";
import "./InfoReklama.scss";
import Slika from "./img/djubrivo.jpg";
import Buttons from "../../UI/Button/Buttons";

const Naslov = props => {
  return (
    <div>
      <h2>{props.children}</h2>
    </div>
  );
};

export default class InfoReklama extends PureComponent {
  state = {
    val: "ORGANIC MINERAL Ca"
  };

  render() {
    const { click, show } = this.props;
    let infoClasses = show ? "infoObjekta open" : "infoObjekta";

    return (
      <div className={infoClasses}>
        <h1>AKCIJSKA PONUDA</h1>
        <img src={Slika} alt="slika" />
        {<Naslov>{this.state.val}</Naslov>}
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Buttons clicked={click}>info</Buttons>
        <div className="infoDiv">
          <span className="close-btn" onClick={this.props.removeCommentBox}>
            <i className="fa fa-window-close" />
          </span>
        </div>
      </div>
    );
  }
}
