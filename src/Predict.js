import React, { Component } from "react";
import Icon from "./Icon.js";
import "./Predict.css";
class Predict extends Component {
  render() {
    return (
      <div>
        <strong>{this.props.day}</strong>
        <div className="row">
          {" "}
          <div className="col-sm-6">
            {" "}
            <Icon />
          </div>
          <div className="col-sm-6">
            {" "}
            <ul className="details">
              <li className="forecastTemp">Max. Temp. 28 ºC</li>
              <li className="forecastTemp">Min. Temp. 28 ºC</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Predict;
