import React, { Component } from "react";
import DigbangSimulator from "./components/digbang-simulator";
import "rc-slider/assets/index.css";
import "react-simple-flex-grid/lib/main.css";

class App extends Component {
  render() {
    return (
      <div>
        <DigbangSimulator />
      </div>
    );
  }
}

export default App;
