import React from "react";

export class Moon extends React.Component {
  constructor(props) {
    super(props);
  }
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
