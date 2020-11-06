import React from "react";
import "./toggleButton.scss";

export default function ToggleButton(props) {
  return (
    <div className="toggle__button">
      <button className="toggle" onClick={props.clicked}>
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
      </button>
    </div>
  );
}
