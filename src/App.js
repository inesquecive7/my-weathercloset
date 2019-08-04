import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Closet from "./Closet.js";

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Weather Closet</h1>
        <Row>
          <div className="card m-3 p-3 rounded border">
            <div className="card-body">
              <Closet city="Lisbon" />
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default App;
