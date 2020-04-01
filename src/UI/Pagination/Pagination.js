import React from "react";
import "./Pagination.scss";

export default function Pagination(props) {
  console.log(props.prikaz);

  return (
    <div className="pagination" style={{ display: `${props.prikaz}` }}>
      <div className={props.newPage ? "" : "open"} onClick={props.clicked} />
      <div className={props.newPage ? "open" : ""} onClick={props.clicked} />
    </div>
  );
}
