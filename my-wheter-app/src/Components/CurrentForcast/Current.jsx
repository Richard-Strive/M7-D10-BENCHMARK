import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./Current.css";

function Current({ current }) {
  return (
    <div className="current_container">
      {current.daily.map((day) => (
        <Jumbotron fluid>
          <Container>
            <h1>{day.weather[0].description}</h1>
            Avg temp: <p>{Math.ceil(day.temp.day - 273.15)} C</p>
          </Container>
        </Jumbotron>
      ))}
    </div>
  );
}

export default Current;
