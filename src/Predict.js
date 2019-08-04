import React, { Component } from "react";
import axios from "axios";
import Icon from "./Icon.js";
import Loader from "react-loader-spinner";
import "./Predict.css";
class Predict extends Component {
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
        time: "today",
        maxTemp: Math.round(response.data.main.temp_max),
        minTemp: Math.round(response.data.main.temp_min)
      }
    });
  };
  componentDidMount() {
    this.search(this.props.city);
  }

  search = city => {
    let apiUrl = `${this.apiRoot}/data/2.5/weather?q=${city}&appid=${
      this.apiKey
    }&mode=xml&units=metric`;
    axios.get(apiUrl).then(this.displayData);
  };
  render() {
    if (this.state.loaded) {
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
    } else {
      return (
        <div className="spinner">
          <Loader type="Circles" color="#22b2da" height="100" width="100" />
        </div>
      );
    }
  }
}
export default Predict;
