import React from "react";
import "./Cards.scss";

export default function Card2(props) {
  const details = props.details;
  return (
    <div className="card2">
      <div className="card2__phone">
        <span className="btn__phone">
          <a href={`tel:${details[1].phone}`}>
            <i className="fas fa-phone-square" />
            {details[1].phone}
          </a>
        </span>
      </div>
      <div className="card2__text">
        {details[1].paragraph}
        <span>{details[1].span}</span>
      </div>
    </div>
  );
}
