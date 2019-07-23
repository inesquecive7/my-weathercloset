import React, { Component } from "react";
import "./Closet.css";
class Closet extends Component {
  state = {
    loaded: false
  };
  componentDidMount() {
    this.setState({
      loaded: true,
      weather: {
        city: "Paris",
        date: "Tuesday, July 23",
        description: "Super sunny",
        humidity: 0,
        windSpeed: 22,
        temperature: 31,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
      }
    });
  }
  render() {
    if (this.state.loaded) {
      return (
        <div>
          <h1>Weather Closet</h1>
          <h2>{this.state.weather.city}</h2>
          <ul>
            <li>{this.state.weather.date}</li>
            <li>{this.state.weather.description}</li>
          </ul>
          <div className="row">
            <div className="col-sm-6">
              <div className="clearfix">
                <img
                  src={this.state.weather.iconUrl}
                  alt=""
                  className="float-left"
                />
                <div className="temperature float-left">
                  {this.state.weather.temperature} <small>º C | F</small>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <ul>
                <li>Humidity: {this.state.weather.humidity} %</li>
                <li>Wind speed: {this.state.weather.windSpeed} kmH</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Closet;
