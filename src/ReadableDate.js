import React, { Component } from "react";

class ReadableDate extends Component {
  niceDate = () => {
    let date = new Date(this.props.timestamp * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let day = days[date.getDay()];
    return `Retrieved ${day} ${hours}:${minutes}`;
  };
  render() {
    return <div>{this.niceDate()}</div>;
  }
}

export default ReadableDate;
