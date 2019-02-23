import React from "react";
import ReactDOM from "react-dom";
import Utils from "./utils.js";

let utils = new Utils();
let getAnimation = () => {
  return {
    animation: "circle " + utils.getSpeed("sputnik") + "ms linear infinite",
    left: "calc(" + utils.getOffset() + "% - 10px)",
    top: "calc(" + utils.getOffset() + "% - 200px)"
  };
};
export class Sputnik extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    console.log("node", node);
    let intervalId = setInterval(this.getCoords, 1000);
    this.setState({ intervalId: intervalId, node: node });
  }
  componentWillUnmount() {
    console.log("unmount");
    clearInterval(this.state.intervalId);
  }

  getCoords = () => {
    let coords = this.state.node.getBoundingClientRect();
    this.props.getCurrentCoords(coords);
  };

  render() {
    let array = [];
    for (let i = 0; i < this.props.count; i++) {
      array.push({
        key: "sputnik#" + i
      });
    }

    const sputnikList = array.map(element => (
      <object
        className="sputnik"
        key={element.key}
        type="image/svg+xml"
        data="./svg/sputnik.svg"
        style={getAnimation()}
      >
        Your browser does not support SVG
      </object>
    ));

    return <div>{sputnikList}</div>;
  }
}
export default Sputnik;
