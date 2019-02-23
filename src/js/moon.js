import React from "react";
import ReactDOM from "react-dom";
import Utils from "./utils.js";

const utils = new Utils();
let getAnimation = () => {
  const moonSpeed = utils.getSpeed("moon");
  console.log(
    "the speed of the moon = ",
    ((2 * Math.PI * 400) / moonSpeed) * 1000,
    " px/ms"
  );
  return {
    animation: "circle " + moonSpeed + "ms linear infinite"
  };
};

export class Moon extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    let intervalId = setInterval(this.getCoords, 100);
    this.setState({ intervalId: intervalId, node: node });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  getCoords = () => {
    let coords = this.state.node.getBoundingClientRect();
    this.props.getMoonCoords(coords);
  };

  componentWillMount() {}

  render() {
    const moon = (
      <object
        className="moon"
        type="image/svg+xml"
        data="./svg/moon.svg"
        style={getAnimation()}
      >
        Your browser does not support SVG
      </object>
    );
    return moon;
  }
}
export default Moon;
