import React from "react";
import ReactDOM from "react-dom";
import Start from "./js/start.js";
import Sputnik from "./js/sputnik.js";
import "./css/styles.css";

function App() {
  return (
    <div className="space">
      <div className="earth">
        <object type="image/svg+xml" data="./svg/earth.svg">
          Your browser does not support SVG
        </object>
      </div>
      <Start />
      <Sputnik />
    </div>
  );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
