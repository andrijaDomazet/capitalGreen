import React from "react";
import "./ArrayCarousel.scss";
import img1 from "../../../img/pozadina1.jpeg";

export default function ArrayCarousel() {
  return (
    <div className="gallery-container">
      <a className="arrow-container arrow-container-left" ng-click="left()">
        <div className="arrow">
          <i className="fa fa-angle-left fa-4x"></i>
        </div>
      </a>
      <a className="arrow-container arrow-container-right" ng-click="right()">
        <div className="arrow">
          <i className="fa fa-angle-right fa-4x"></i>
        </div>
      </a>
      <div className="gallery-content">
        <div className="tile" ng-repeat="tile in tiles" id="tile-{{tile}}">
          <img src={img1} alt="no picture" />
        </div>
        <div className="tile" ng-repeat="tile in tiles" id="tile-{{tile}}">
          <img src={img1} alt="no picture" />
        </div>
        <div className="tile" ng-repeat="tile in tiles" id="tile-{{tile}}">
          <img src={img1} alt="no picture" />
        </div>
        <div className="tile" ng-repeat="tile in tiles" id="tile-{{tile}}">
          <img src={img1} alt="no picture" />
        </div>
        <div className="tile" ng-repeat="tile in tiles" id="tile-{{tile}}">
          <img src={img1} alt="no picture" />
        </div>
        <div className="tile" ng-repeat="tile in tiles" id="tile-{{tile}}">
          <img src={img1} alt="no picture" />
        </div>
      </div>
    </div>
  );
}
