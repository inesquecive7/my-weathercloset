import React, { Component } from "react";
import Icon from "./Icon.js";
import Search from "./Search.js";
import axios from "axios";
import ReadableDate from "./ReadableDate.js";
import Loader from "react-loader-spinner";
import "./Closet.css";

class Closet extends Component {
  apiKey = "877ddaa55b5e9c0d70a1933d85e50b02";
  apiRoot = "https://api.openweathermap.org";
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
        iconUrl: response.data.weather[0].icon
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
        <div>
          <Search submit={this.search} />

          <h2>{this.state.weather.city}</h2>
          <ul>
            <li>
              <ReadableDate
                timestamp={this.state.weather.date}
                timezone={this.state.weather.timezone}
              />
            </li>
            <li>{this.state.weather.description}</li>
          </ul>
          <div className="row">
            <div className="col-sm-6">
              <div className="clearfix">
                <Icon code={this.state.weather.iconUrl} />
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
      return (
        <div className="spinner">
          <Loader type="Circles" color="#22b2da" height="100" width="100" />
        </div>
      );
    }
  }
}

export default Closet;
