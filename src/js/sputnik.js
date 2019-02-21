import React from "react";

export class Sputnik extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  startShip = () => {
    alert("Click");
  };
  render() {
    const startButton = (
      <object className="sputnik" type="image/svg+xml" data="./svg/sputnik.svg">
        Your browser does not support SVG
      </object>
    );
    return startButton;
  }
}
export default Sputnik;
