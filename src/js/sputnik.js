import React from "react";
import ReactDOM from "react-dom";
import Utils from "./utils.js";

const utils = new Utils();
let getAnimation = () => {
  const sputnikSpeed = utils.getSpeed("sputnik");
  console.log(
    "the speed of one of the sputniks = ",
    ((2 * Math.PI * 200) / sputnikSpeed) * 1000,
    " px/ms"
  );
  return {
    animation: "circle " + sputnikSpeed + "ms linear infinite",
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
    const elements = node.getElementsByClassName("sputnik");

    let intervalId = setInterval(this.getCoords, 100);
    this.setState({ intervalId: intervalId, sputnikList: elements });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  getCoords = () => {
    let coords = [];
    for (let i = 0; i < this.state.sputnikList.length; i++) {
      coords.push(this.state.sputnikList[i].getBoundingClientRect());
    }
    this.props.getCurrentCoords(coords);
  };

  render() {
    let array = [];
    if (this.props.count && this.props.count.countOfSputnik) {
      for (let i = 0; i < this.props.count.countOfSputnik; i++) {
        array.push({
          key: "sputnik#" + i
        });
      }
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
