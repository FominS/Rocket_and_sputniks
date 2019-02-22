import React from "react";
import ReactDOM from "react-dom";

export class Sputnik extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    let intervalId = setInterval(this.getCoords, 1000);
    this.setState({ intervalId: intervalId, node: node });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  getCoords = () => {
    let coords = this.state.node.getBoundingClientRect();
    this.props.getCurrentCoords(coords);
  };

  render() {
    const sputnik = (
      <object className="sputnik" type="image/svg+xml" data="./svg/sputnik.svg">
        Your browser does not support SVG
      </object>
    );
    return sputnik;
  }
}
export default Sputnik;
