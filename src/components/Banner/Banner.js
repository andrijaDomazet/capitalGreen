import React from "react";
import "./Banner.scss";
import { productsBanner } from "../../shared/shared";
const Banner = (props) => {
  const { title, text } = productsBanner[props.index];
  return (
    <div className="banner">
      <p>{text}</p>
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;
