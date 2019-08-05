import React, { Component } from "react";
import Supercold from "./images/Supercold.jpg";
import Cold from "./images/Cold.jpg";
import Warm from "./images/Warm.jpg";
import Hot from "./images/Hot.jpg";
import Superhot from "./images/Superhot.jpg";

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

  render() {
    if (this.props.tempFeel >= 5) {
      return <div>{<img src={this.getSuperCold()} alt="supercold" />}}</div>;
    } else {
      if ((this.props.tempFeel > 5) & (this.props.tempFeel <= 15)) {
        return <div>{<img src={this.getCold()} alt="cold" />}}</div>;
      } else {
        if ((this.props.tempFeel > 15) & (this.props.tempFeel <= 21)) {
          return <div>{<img src={this.getWarm()} alt="warm" />}}</div>;
        } else {
          if ((this.props.tempFeel > 21) & (this.props.tempFeel <= 28)) {
            return <div>{<img src={this.getHot()} alt="hot" />}}</div>;
          } else {
            if (this.props.tempFeel > 28) {
              return (
                <div>{<img src={this.getSuperHot()} alt="superhot" />}}</div>
              );
            }
          }
        }
      }
    }
  }
}
export default Hanger;
