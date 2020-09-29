import React from "react";
import "./Banner.scss";
import { productsBanner } from "../../shared/shared";
const Banner = (props) => {
  const { title, text } = productsBanner[props.index];
  return (
    <div className="banner">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Banner;
