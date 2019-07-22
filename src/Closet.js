import React, { Component } from "react";
import "./Closet.css";
class Closet extends Component {
  render() {
    return (
      <div>
        <h1>Weather Closet</h1>
        <h2>{this.props.city}</h2>
        <ul>
          <li>Monday, July 22</li>
          <li>Very sunny</li>
        </ul>
        <div className="row">
          <div className="col-sm-6">
            <div className="clearfix">
              {" "}
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt=""
                className="float-left"
              />
              <div className="temperature float-left">
                30 <small>º C | F</small>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <ul>
              <li>Humidity: 26 %</li>
              <li>Wind speed: 5.2 kmH</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Closet;
