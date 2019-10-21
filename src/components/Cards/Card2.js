import React from "react";
import "./Cards.scss";
import data from "../../details";
export default function Card2(props) {
  return (
    <div className="card2">
      <div className="card2-phone">
        <span className="btn-phone">
          <i className="fas fa-phone-square" />
          {data[1].phone}
        </span>
      </div>
      <div className="card2-text">
        {data[1].paragraph}
        <span>{data[1].span}</span>
      </div>
    </div>
  );
}
