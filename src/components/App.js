import React, { Component } from "react";
import HeroImage from "./HeroImage.js";
import MainContainer from "./MainContainer.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroImage />
        <MainContainer />
      </div>
    );
  }
}

export default App;
