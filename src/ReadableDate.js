import React, { Component } from "react";

class ReadableDate extends Component {
  niceDate = () => {
    let date = new Date(
      this.props.timestamp * 1000 + (this.props.timezone - 3600) * 1000
    );
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
    return (
      <small>
        {day} {hours}:{minutes} local time
      </small>
    );
  };
  render() {
    return <div>{this.niceDate()}</div>;
  }
}

export default ReadableDate;
