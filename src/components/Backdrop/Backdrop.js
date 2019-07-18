// import React from "react";
// import "./Backdrop.scss";
// export default function Backdrop(props) {
//   return (
//     //   <div className={"backDrop"} onClick={props.clicked} />
//     <div className="backdrop" onClick={props.click} />
//   );
// }
import React from "react";
import "./Backdrop.scss";
// import "./Modal.scss";

const Backdrop = props =>
  props.show ? <div className="backDrop" onClick={props.clicked} /> : null;

export default Backdrop;
