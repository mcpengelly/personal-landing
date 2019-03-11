import React, { Component } from "react";

import "./App.css";
import SocialMediaBar from "./SocialMediaBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm Matt</h1>
        <p>This page is a temporary placeholder, check back in a little while!</p>
        <p>In the meantime, if you're interested what I do, check out the links below.</p>
        <SocialMediaBar />
      </div>
    );
  }
}

export default App;
