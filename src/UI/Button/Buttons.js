import React from "react";
import "./Buttons.scss";

// click = () => {
//   console.log("idemooo");
// };

export default function Buttons(props) {
  // const { naziv } = props;
  return (
    <div>
      <button className={props.classes} onClick={props.clicked}>
        {props.children}
      </button>
    </div>
  );
}
