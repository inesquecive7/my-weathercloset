import React, { Component } from "react";
import Icon from "./Icon.js";
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
              <li>Max. Temp.: 28 ºC</li>
              <li>Min. Temp.: 28 ºC</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Predict;
