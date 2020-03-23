import React from "react";
import "./O-nama.scss";
// import { Card, CardText, CardBody } from "reactstrap";
import MainCarousel from "./Carousel/MainCarousel";

export default function O_nama() {
  return (
    <div className="o-nama">
      <div className="row">
        <div className="col-sm-6">
          <MainCarousel />
        </div>
        <div className="col-sm-6">
          <div className="aboutUs__text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              culpa voluptas nam id a reprehenderit porro, repudiandae libero
              itaque aspernatur neque quibusdam ducimus ratione. Doloribus
              placeat asperiores quis ducimus ab explicabo necessitatibus, iure
              enim dolorem nesciunt sed in debitis odio tempora provident error
              vitae ipsam, soluta praesentium reiciendis. Eveniet, consequatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
