import React from "react";

export class Ship extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}

  render() {
    const ship = (
      <object className="ship" type="image/svg+xml" data="./svg/ship.svg">
        Your browser does not support SVG
      </object>
    );
    return ship;
  }
}
export default Ship;
