import React, { Component } from "react";
import "./Closet.css";
import axios from "axios";

class Closet extends Component {
  apiKey = "877ddaa55b5e9c0d70a1933d85e50b02";
  apiRoot = "https://api.openweathermap.org";
  state = {
    loaded: false
  };
  displayData = response => {
    console.log(response);
    this.setState({
      loaded: true,
      weather: {
        city: response.data.name,
        date: response.data.dt,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed,
        temperature: Math.round(response.data.main.temp),
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
      }
    });
  };
  componentDidMount() {
    let apiUrl = `${this.apiRoot}/data/2.5/weather?q=${this.props.city}&appid=${
      this.apiKey
    }&units=metric`;
    axios.get(apiUrl).then(this.displayData);
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
