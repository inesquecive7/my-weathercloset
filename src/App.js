import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Closet from "./Closet.js";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Weather Closet</h1>
        <div className="card m-3 p-3">
          <div className="card-body">
            <Closet city="Vilamoura" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
