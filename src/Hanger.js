import React, { Component } from "react";
import Supercold from "./images/Supercold.jpg";
import Cold from "./images/Cold.jpg";
import Warm from "./images/Warm.jpg";
import Hot from "./images/Hot.jpg";
import Superhot from "./images/Superhot.jpg";

class Hanger extends Component {
  state = {};
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

  setState = {
    realFeel: this.props.tempFeel
  };
  render() {
    if (this.state.realFeel < 5) {
      return <img src={this.getSuperCold()} alt="supercold" />;
    } else if (this.state.realFeel > 5 && this.state.realFeel <= 15) {
      return <img src={this.getCold()} alt="cold" />;
    } else if (this.state.realFeel > 15 && this.state.realFeel <= 21) {
      return <img src={this.getWarm()} alt="warm" />;
    } else if (this.state.realFeel > 21 && this.state.realFeel <= 28) {
      return <img src={this.getHot()} alt="hot" />;
    } else if (this.state.realFeel > 28) {
      return <img src={this.getSuperHot()} alt="superhot" />;
    } else {
      return <div> OH GOD! </div>;
    }
  }
}

export default Hanger;
