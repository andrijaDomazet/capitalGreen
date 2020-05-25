import React from "react";
import "./ArrayCarousel.scss";

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
          1
        </div>
        <div class="tile" ng-repeat="tile in tiles" id="tile-{{tile}}">
          2
        </div>
        <div class="tile" ng-repeat="tile in tiles" id="tile-{{tile}}">
          3
        </div>
        <div class="tile" ng-repeat="tile in tiles" id="tile-{{tile}}">
          4
        </div>
        <div class="tile" ng-repeat="tile in tiles" id="tile-{{tile}}">
          5
        </div>
        <div class="tile" ng-repeat="tile in tiles" id="tile-{{tile}}">
          6
        </div>
      </div>
    </div>
  );
}
