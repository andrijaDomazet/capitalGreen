import React, { PureComponent } from "react";
import "./Popup.scss";
import Slika from "./img/prvaStrana.jpg";
import Buttons from "../../UI/Button/Buttons";

const Naslov = props => {
  return (
    <div>
      <h2>{props.children}</h2>
    </div>
  );
};

export default class Popup extends PureComponent {
  state = {
    val: "ORGANIC MINERAL Ca"
  };
  click = () => {
    console.log("idemo");
  };
  render() {
    const { click2, show } = this.props;
    let infoClasses = show ? "action__product open" : "action__product";

    return (
      <div className={infoClasses}>
        <img src={Slika} alt="picture" />
        <div className="info__text">
          <h1>AKCIJSKA PONUDA !!!</h1>
          {<Naslov>{this.state.val}</Naslov>}
          <Buttons clicked={click2}>Saznaj više...</Buttons>
          <div className="info-close" onClick={this.props.removeCommentBox}>
            <i className="fas fa-times" />
          </div>
        </div>
      </div>
    );
  }
}
