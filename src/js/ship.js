import React from "react";
import ReactDOM from "react-dom";

let flight = {}; //fly style


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

  componentWillReceiveProps(nextProps) {
    if (nextProps.startShip && nextProps.startShip.start) {
      const node = ReactDOM.findDOMNode(this);
      let intervalId = setInterval(this.getCoords, 100);
      this.setState({ intervalId: intervalId, node: node });

      flight = {
        transform: "translate(0, -" + (node.offsetTop + 30) + "px)",
        transition: "all 2s ease-in-out"
      };
    }
  }

  render() {
    const ship = (
      <object
        style={flight}
        className="ship"
        type="image/svg+xml"
        data="./svg/ship.svg"
      >

        Your browser does not support SVG
      </object>
    );
    return ship;
  }
}
export default Ship;
