import React from "react";
import "./Buttons.scss";

export default function Buttons(props) {
  return (
    <button
      //  className={props.classes}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
}
