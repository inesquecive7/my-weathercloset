import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Closet from "./Closet.js";
import Predict from "./Predict.js";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Weather Closet</h1>
        <div className="row">
          <div className="card m-3 p-3 rounded border">
            <div className="card-body">
              <Closet city="Lisbon" />
            </div>
            <div className="row">
              <div className="col-4">
                <Predict day="Tomorrow" />
              </div>
              <div className="col-4">
                <Predict day="In two days" />
              </div>
              <div className="col-4">
                <Predict day="In three days" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
