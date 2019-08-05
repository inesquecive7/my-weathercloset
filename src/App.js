import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Closet from "./Closet.js";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Weather Closet</h1>
        <div className="row">
          <div className="card m-3 p-3 rounded border" id="display">
            <div className="card-body">
              <Closet city="Lisbon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
