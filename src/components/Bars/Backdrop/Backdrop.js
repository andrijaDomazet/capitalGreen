import React from "react";
import "./Backdrop.scss";

const Backdrop = props =>
  props.show ? <div className="backdrop" onClick={props.clicked} /> : null;

export default Backdrop;
