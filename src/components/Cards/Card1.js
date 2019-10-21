import React from "react";
import "./Cards.scss";
import Buttons from "../../UI/Button/Buttons";
import data from "../../details.json";

const Card1 = props => {
  return (
    <div className="card1-div">
      <div className="card1">
        <h2>{data[0].title}</h2>
        <p className="card1-text">{data[0].paragraph}</p>

        <Buttons clicked={props.click1}>{data[0].button_title}</Buttons>
      </div>
    </div>
  );
};
export default Card1;
