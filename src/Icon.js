import React, { Component } from "react";

class Icon extends Component {
  getIcon = () => {
    return `http://openweathermap.org/img/wn/${this.props.code}@2x.png `;
  };
  render() {
    return <img src={this.getIcon()} alt="" />;
  }
}

export default Icon;
