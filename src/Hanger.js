import React, { Component } from "react";
import Supercold from "./images/Supercold.jpg";
import Cold from "./images/Cold.jpg";
import Warm from "./images/Warm.jpg";
import Hot from "./images/Hot.jpg";
import Superhot from "./images/Superhot.jpg";

class Hanger extends Component {
  realFeel = this.props.tempFeel;

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

  render() {
    if (this.realFeel > 5) {
      return <img src={this.getSuperCold()} alt="supercold" />;
    } else {
      if ((this.realFeel > 5) & (this.realFeel <= 15)) {
        return <img src={this.getCold()} alt="cold" />;
      } else {
        if ((this.realFeel >= 15) & (this.realFeel < 21)) {
          return <img src={this.getWarm()} alt="warm" />;
        } else {
          if ((this.realFeel >= 21) & (this.realFeel < 28)) {
            return <img src={this.getHot()} alt="hot" />;
          } else {
            if (this.realFeel >= 28) {
              return <img src={this.getSuperHot()} alt="superhot" />;
            } else {
              return <span> OH GOD! </span>;
            }
          }
        }
      }
    }
  }
}

export default Hanger;
