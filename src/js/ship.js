import React from "react";
import ReactDOM from "react-dom";
import Utils from "./utils.js";

let flight = {}; //fly style
const utils = new Utils();


export class Ship extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  getCoords = () => {
    let coords = this.state.node.getBoundingClientRect();
    let result = this.props.getShipCoords(coords);
    if (coords.y <= 0 || !result) {
      clearInterval(this.state.intervalId);
    }
  };

  startShip = () => {
    const node = ReactDOM.findDOMNode(this);


    const shipElement = node.getElementsByClassName("ship")[0];
    let intervalId = setInterval(this.getCoords, 100);
    this.setState({ intervalId: intervalId, node: shipElement });
 
    const shipSpeed = utils.getSpeed("ship");
    console.log(
      "ship speed=",
      ((shipElement.offsetTop + 30) / shipSpeed) * 1000,
      "px/s"
    );
    flight = {
      transform: "translate(0, -" + (shipElement.offsetTop + 30) + "px)",
      transition: "all " + shipSpeed + "ms linear"

    };
  };

  render() {
    const ship = (
      <object
        style={flight}
        className="ship"
        id="ship"
        type="image/svg+xml"
        data="./svg/ship.svg"
      >

        Your browser does not support SVG
      </object>
    );
    return (
      <div>
        {ship}
        <div className="start">
          <a onClick={this.startShip}>Запуск</a>
        </div>
      </div>
    );
  }
}
export default Ship;
