import React from "react";
import "./Cards.scss";
import Buttons from "../../UI/Button/Buttons";
import { Animated } from "react-animated-css";

const Card1 = (props) => {
  const details = props.details;
  return (
    <div className="card1">
      <p className="card1-text">{details[0].paragraph}</p>
      <Animated
        animationIn="fadeInLeft"
        animationOut="fadeOut"
        animationInDelay={2400}
        animationInDuration={1200}
        isVisible={true}
      >
        <Buttons
        // clicked={props.clicked}
        >
          {details[0].button_title}
        </Buttons>
      </Animated>
    </div>
  );
};
export default Card1;
