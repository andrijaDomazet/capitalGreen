import React from "react";
import "./Cards.scss";
import data from "../../details";
export default function Card2(props) {
  return (
    <div className="card2">
      <div className="card2__phone" onclick="window.open('tel:+381645222333');">
        <span className="btn__phone">
          <i className="fas fa-phone-square" />
          {data[1].phone}
        </span>
      </div>
      <div className="card2__text">
        {data[1].paragraph}
        <span>{data[1].span}</span>
      </div>
    </div>
  );
}
