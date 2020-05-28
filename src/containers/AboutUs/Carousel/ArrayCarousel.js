import React from "react";
import "./ArrayCarousel.scss";
import img1 from "../../../img/pozadina1.jpeg";

export default function ArrayCarousel() {
  return (
    <div class="gallery-container">
      <a class="arrow-container arrow-container-left" ng-click="left()">
        <div class="arrow">
          <i class="fa fa-angle-left fa-4x"></i>
        </div>
      </a>
      <a class="arrow-container arrow-container-right" ng-click="right()">
        <div class="arrow">
          <i class="fa fa-angle-right fa-4x"></i>
        </div>
      </a>
      <div class="gallery-content">
        <div class="tile" ng-repeat="tile in tiles" id="tile-{{tile}}">
          <img src={img1} alt="no picture" />
        </div>
        <div class="tile" ng-repeat="tile in tiles" id="tile-{{tile}}">
          <img src={img1} alt="no picture" />
        </div>
        <div class="tile" ng-repeat="tile in tiles" id="tile-{{tile}}">
          <img src={img1} alt="no picture" />
        </div>
        <div class="tile" ng-repeat="tile in tiles" id="tile-{{tile}}">
          <img src={img1} alt="no picture" />
        </div>
        <div class="tile" ng-repeat="tile in tiles" id="tile-{{tile}}">
          <img src={img1} alt="no picture" />
        </div>
        <div class="tile" ng-repeat="tile in tiles" id="tile-{{tile}}">
          <img src={img1} alt="no picture" />
        </div>
      </div>
    </div>
  );
}
