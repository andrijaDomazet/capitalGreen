import React from "react";
import "./Popup.scss";
import Slika from "./img/prvaStrana.jpg";
import Buttons from "../../UI/Button/Buttons";

export default function Popup(props) {
  const { show, details } = props;
  let infoClasses = show ? "action__product open" : "action__product";
  return (
    <div className={infoClasses}>
      <img src={Slika} alt="noPicture" />
      <div className="info__text">
        <h1>AKCIJSKA PONUDA !!!</h1>
        <h2>{details.name}</h2>
        <ol>
          <li>{details.pakovanje}</li>
          <li>{details.price}</li>
        </ol>
        <p>{details.description}</p>
        <Buttons>Saznaj više...</Buttons>
        <div className="info-close" onClick={props.removeCommentBox}>
          <i className="fas fa-times" />
        </div>
      </div>
    </div>
  );
}
