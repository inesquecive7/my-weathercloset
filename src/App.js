import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Closet from "./Closet.js";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="card m-3 p-3">
          <div className="card-body">
            <Closet city="Quarteira" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
