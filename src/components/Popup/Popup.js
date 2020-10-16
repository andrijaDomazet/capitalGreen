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
      <div className="info-close" onClick={props.removeCommentBox}>
        <i className="fas fa-times" />
      </div>
    </div>
  );
}
