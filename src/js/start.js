import React from "react";

export class Start extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  startShip = () => {
    alert("Click");
  };
  render() {
    const startButton = (
      <div className="start">
        <a onClick={this.startShip}>Start</a>
      </div>
    );
    return startButton;
  }
}
export default Start;
