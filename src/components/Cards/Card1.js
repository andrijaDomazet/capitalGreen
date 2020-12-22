import React from "react";
import "./Cards.scss";
import Buttons from "../../UI/Button/Buttons";

const Card1 = (props) => {
  const details = props.details;
  return (
    <div className="card1">
      {/* <h2>{details[0].title}</h2> */}
      <p className="card1-text">{details[0].paragraph}</p>
      <Buttons
      // clicked={props.clicked}
      >
        {details[0].button_title}
      </Buttons>
    </div>
  );
};
export default Card1;
