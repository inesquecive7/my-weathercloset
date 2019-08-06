import React, { Component } from "react";
import Supercold from "./images/Supercold.jpg";
import Cold from "./images/Cold.jpg";
import Warm from "./images/Warm.jpg";
import Hot from "./images/Hot.jpg";
import Superhot from "./images/Superhot.jpg";
import "./Hanger.css";

class Hanger extends Component {
  getSuperCold = () => {
    return Supercold;
  };
  getCold = () => {
    return Cold;
  };
  getWarm = () => {
    return Warm;
  };
  getHot = () => {
    return Hot;
  };
  getSuperHot = () => {
    return Superhot;
  };
  showFashion = () => {
    if (this.props.tempFeel < 5)
      return (
        <img
          src={this.getSuperCold()}
          alt="supercold"
          className="rounded-circle"
        />
      );
    if (this.props.tempFeel > 5 && this.props.tempFeel <= 15)
      return <img src={this.getCold()} alt="cold" className="rounded-circle" />;
    if (this.props.tempFeel > 15 && this.props.tempFeel <= 21)
      return <img src={this.getWarm()} alt="warm" className="rounded-circle" />;
    if (this.props.tempFeel > 21 && this.props.tempFeel <= 28)
      return <img src={this.getHot()} alt="hot" className="rounded-circle" />;
    if (this.props.tempFeel > 28)
      return (
        <img
          src={this.getSuperHot()}
          alt="superhot"
          className="rounded-circle"
        />
      );
  };
  render() {
    return (
      <ul>
        <li>{this.showFashion()}</li>
      </ul>
    );
  }
}

export default Hanger;
