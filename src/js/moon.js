import React from "react";

import ReactDOM from "react-dom";


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
      <object className="moon" type="image/svg+xml" data="./svg/moon.svg">
        Your browser does not support SVG
      </object>
    );
    return moon;
  }
}
export default Moon;
