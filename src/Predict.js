import React, { Component } from "react";
import axios from "axios";
import Icon from "./Icon.js";
import ReadableDate from "./ReadableDate.js";
import Loader from "react-loader-spinner";
import "./Predict.css";

class Predict extends Component {
  apiKey = "877ddaa55b5e9c0d70a1933d85e50b02";
  apiRoot = "https://api.openweathermap.org";
  state = {
    loaded: false,
    place: this.props.place
  };
  componentWillMount() {
    this.newLoad(this.state.place);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ place: nextProps.place }, () => {
      this.newLoad();
    });
  }
  newLoad = () => {
    let newUrl = `${this.apiRoot}/data/2.5/forecast?q=${
      this.state.place
    }&appid=${this.apiKey}&units=metric`;
    axios.get(newUrl).then(response => {
      console.log(response);
      let prediction = response.data.list;
      let dayPrediction = [7, 15, 23, 31, 39].map(order => {
        return {
          date: prediction[order].dt,
          description: prediction[order].weather[0].main,
          icon: prediction[order].weather[0].icon,
          temperature: Math.round(prediction[order].main.temp),
          wind: Math.round(prediction[order].wind.speed),
          timezone: response.data.city.timezone
        };
      });
      this.setState({ prediction: dayPrediction });
    });
  };

  render() {
    if (this.state.prediction) {
      return (
        <div>
          {this.state.prediction.map((weather, order) => {
            return (
              <div className="container">
                <div className="col-10 center-block">
                  <div className="row justify-content-around" id="forecasts">
                    <div className="col-3 center-block">
                      <div key={order}>
                        <div className="forecast-icon">
                          <Icon code={weather.icon} />
                        </div>
                      </div>
                    </div>
                    <div className="col-3" />
                    <div className="col-6">
                      <div key={order}>
                        <ul forecast-data>
                          <li>
                            <ReadableDate
                              timestamp={weather.date}
                              timezone={weather.timezone}
                            />
                          </li>
                          <li>Description:{weather.description}</li>
                          <li>Temperature: {weather.temperature}ºC</li>
                          <li>Wind speed:{weather.wind}km/H</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="spinner">
          <Loader type="Circles" color="#22b2da" height="50" width="50" />
        </div>
      );
    }
  }
}

export default Predict;
