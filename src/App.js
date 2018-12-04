import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <div>
              <label className="label" htmlFor="name">
                Enter name:
              </label>
              <input id="name" type="text" />
              <button style={{ backgroundColor: "blue", color: "white" }}>
                Submit
              </button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
