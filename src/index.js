import React from "react";
import ReactDOM from "react-dom";
import Sputnik from "./js/sputnik.js";
import Ship from "./js/ship.js";
import Moon from "./js/moon.js";
import "./css/styles.css";

const allSpaceElementsCoords = {
  moon: {},
  sputnikList: {}
};


//const countOfSputnic = 4;


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({ countOfSputnik: 4 });
  }

  getSputnikCoords = coords => {
    //console.log("sputnik1 x=", coords.x, ",y=", coords.y);
    allSpaceElementsCoords.sputnikList = coords;
  };

  getMoonCoords = coords => {
    allSpaceElementsCoords.moon = coords;
  };

  getShipCoords = coords => {
    //console.log("ship x=", coords.x, ",y=", coords.y);
    //success
    if (coords.y <= 0) {
      if (!alert("Ракета успешно вышла в открытый космос")) {
        window.location.reload();
        return false;
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


    //exception sputniks
    for (let i = 0; i < allSpaceElementsCoords.sputnikList.length; i++) {
      if (
        coords.x - allSpaceElementsCoords.sputnikList[i].x < 30 &&
        coords.x - allSpaceElementsCoords.sputnikList[i].x > 0 &&
        coords.y - allSpaceElementsCoords.sputnikList[i].y < 20 &&
        coords.y - allSpaceElementsCoords.sputnikList[i].y > 0
      ) {
        if (!alert("Произошло столкновение")) {
          window.location.reload();
          return false;
        }
      }
    }
    return true;

  };

  render() {
    return (
      <div className="space">
        <div className="earth">
          <object type="image/svg+xml" data="./svg/earth.svg">
            Your browser does not support SVG
          </object>
        </div>

        <Sputnik getCurrentCoords={this.getSputnikCoords} count={this.state} />
        <Ship getShipCoords={this.getShipCoords} />
        <Moon getMoonCoords={this.getMoonCoords} />
      </div>
    );
  }

}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
