import React, { Component } from "react";

class Closet extends Component {
  render() {
    return (
      <div>
        <h1>Weather Closet</h1>
        <h3>{this.props.city}</h3>
        <ul>
          <li>Monday, July 22</li>
          <li>Very sunny</li>
        </ul>
        <div className="temperature">
          30 <small>º C</small>
        </div>
        <ul>
          <li>Humidity: 26%July</li>
          <li>Wind speed: 5.2 kmH</li>
        </ul>
      </div>
    );
  }
}

export default Closet;
