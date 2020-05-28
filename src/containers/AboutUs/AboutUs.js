import React from "react";
import "./AboutUs.scss";
import ArrayCarousel from "./Carousel/ArrayCarousel";
// import MainCarousel from "./Carousel/MainCarousel";

export default function AboutUs() {
  return (
    <div className="aboutUs">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, veniam!
        Voluptas quam mollitia temporibus sapiente aliquid vero incidunt dolores
        animi est. Animi sapiente, ipsum odio ut earum iste blanditiis tenetur
        neque odit maxime assumenda. Animi, sequi sit ratione et deserunt
        incidunt quasi voluptatem dolorem voluptates necessitatibus officia quod
        quidem eum?
      </p>
      <ArrayCarousel />
      <div className="aboutUs__text">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          culpa voluptas nam id a reprehenderit porro, repudiandae libero itaque
          aspernatur neque quibusdam ducimus ratione. Doloribus placeat
          asperiores quis ducimus ab explicabo necessitatibus, iure enim dolorem
          nesciunt sed in debitis odio tempora provident error vitae ipsam,
          soluta praesentium reiciendis. Eveniet, consequatur.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          eveniet, beatae amet officiis quos cupiditate eos sequi, voluptas,
          animi repellendus assumenda recusandae earum aliquam commodi eum
          porro?
        </p>
      </div>
    </div>
  );
}
