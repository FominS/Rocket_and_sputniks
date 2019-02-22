import React from "react";
import ReactDOM from "react-dom";
import Sputnik from "./js/sputnik.js";
import Ship from "./js/ship.js";
import Moon from "./js/moon.js";
import "./css/styles.css";

const allSpaceElementsCoords = {
  moon: {},
  sputnik: {}
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  getSputnikCoords = coords => {
    //console.log("sputnik1 x=", coords.x, ",y=", coords.y);
    allSpaceElementsCoords.sputnik = coords;
  };

  getMoonCoords = coords => {
    //console.log("moon x=", coords.x, ",y=", coords.y);
    allSpaceElementsCoords.moon = coords;
  };

  getShipCoords = coords => {
    console.log("ship x=", coords.x, ",y=", coords.y);
    //success
    if (coords.y <= 0) {
      if (!alert("Ракета успешно вышла в открытый космос")) {
        window.location.reload();
      }
    }

    //exception moon
    if (
      coords.x - allSpaceElementsCoords.moon.x < 50 &&
      coords.x - allSpaceElementsCoords.moon.x > 0 &&
      coords.y - allSpaceElementsCoords.moon.y < 50 &&
      coords.y - allSpaceElementsCoords.moon.y > 0
    ) {
      if (!alert("Произошло столкновение")) {
        window.location.reload();
        return false;
      }
    }
    return true;
  };

  startShip = () => {
    this.setState({ start: true });
  };

  render() {
    return (
      <div className="space">
        <div className="earth">
          <object type="image/svg+xml" data="./svg/earth.svg">
            Your browser does not support SVG
          </object>
        </div>
        <Sputnik getCurrentCoords={this.getSputnikCoords} />
        <Ship startShip={this.state} getShipCoords={this.getShipCoords} />
        <Moon getMoonCoords={this.getMoonCoords} />
        <div className="start">
          <a onClick={this.startShip}>Start</a>
        </div>
      </div>
    );
  }

}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
