import React, { Component } from "react";
import Icon from "./Icon.js";
import Search from "./Search.js";
import axios from "axios";
import ReadableDate from "./ReadableDate.js";
import Hanger from "./Hanger.js";
import Loader from "react-loader-spinner";
import Predict from "./Predict.js";
import "./Closet.css";
import "./Icon.css";

class Closet extends Component {
  apiKey = `877ddaa55b5e9c0d70a1933d85e50b02`;
  apiRoot = `https://api.openweathermap.org`;
  state = {
    loaded: false
  };
  displayData = response => {
    this.setState({
      loaded: true,
      weather: {
        city: response.data.name,
        date: response.data.dt,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed,
        temperature: Math.round(response.data.main.temp),
        timezone: response.data.timezone,
        iconUrl: response.data.weather[0].icon,
        maxTemp: Math.round(response.data.main.temp_max),
        minTemp: Math.round(response.data.main.temp_min)
      }
    });
  };
  search = city => {
    let apiUrl = `${this.apiRoot}/data/2.5/weather?q=${city}&appid=${
      this.apiKey
    }&units=metric`;
    axios.get(apiUrl).then(this.displayData);
  };
  componentDidMount() {
    this.search(this.props.city);
  }
  render() {
    if (this.state.loaded) {
      return (
        <div className="container">
          <div className="col-11 center-block">
            <span class="border">
              <div className="row">
                {" "}
                <Search submit={this.search} />
              </div>

              <div className="row">
                <h2>{this.state.weather.city}</h2>
              </div>
              <div className="row">
                <ul>
                  <li>
                    <ReadableDate
                      timestamp={this.state.weather.date}
                      timezone={this.state.weather.timezone}
                    />
                  </li>
                  <li>{this.state.weather.description}</li>
                </ul>
              </div>
              <div className="row">
                <div className="col-2 clearfix">
                  <Icon code={this.state.weather.iconUrl} />
                </div>
                <div className="col-3">
                  <div className=" temperature float-left" id="main-temp">
                    {this.state.weather.temperature} <small>º C</small>
                  </div>
                </div>
                <div className="col-4">
                  <ul>
                    <li>
                      Max. temperature: {this.state.weather.maxTemp}{" "}
                      <small>ºC</small>
                    </li>
                    <li>
                      Min. temperature: {this.state.weather.minTemp}{" "}
                      <small>ºC</small>
                    </li>
                    <li>Humidity: {this.state.weather.humidity} %</li>
                    <li>Wind speed: {this.state.weather.windSpeed} kmH</li>
                  </ul>
                </div>
                <div className="col-3">
                  <Hanger tempFeel={this.state.weather.temperature} />
                </div>
                <div className="row" />{" "}
              </div>
            </span>

            <Predict place={this.state.weather.city} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="spinner">
          <Loader type="Circles" color="#22b2da" height="100" width="100" />
        </div>
      );
    }
  }
}

export default Closet;
