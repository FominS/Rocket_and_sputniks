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
    const sputnik = (
      <object className="sputnik" type="image/svg+xml" data="./svg/sputnik.svg">
        Your browser does not support SVG
      </object>
    );
    return sputnik;
  }
}
export default Sputnik;
