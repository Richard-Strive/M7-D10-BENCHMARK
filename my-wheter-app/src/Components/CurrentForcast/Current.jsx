import React from "react";
import { Card } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./Current.css";

function Current({ currentFor, showFor, setLoader, setShowMain, setShowFor }) {
  const restStart = () => {
    setLoader(true);
    setShowMain(true);
    setShowFor(true);
  };

  return (
    <div
      className="current_container"
      style={{ top: `${showFor ? "-100%" : "24%"}` }}
    >
      <Carousel className="my_carousel">
        {currentFor.daily.map((day) => (
          <div>
            <Card style={{ width: "100%" }} className="card_main">
              <Card.Body>
                <Card.Title>{day.weather[0].description}</Card.Title>
                <Card.Img
                  variant="top"
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  style={{
                    backgroundColor: "lightgray",
                    heigth: "80px",
                    width: "80px",
                  }}
                  className="card_icon"
                />
                Avg temperature day:
                {Math.ceil(day.temp.day - 273.15)}°
                <br />
                Avg temperature morning:
                {Math.ceil(day.temp.morn - 273.15)}°
                <br />
                Avg temperature eve:
                {Math.ceil(day.temp.eve - 273.15)}°
                <br />
                Avg temperature night:
                {(day.feels_like.day - 273.15).toFixed(1)}°
                <br />
              </Card.Body>
            </Card>
            <small className="legend" onClick={() => restStart()}>
              Click here to check the weather of another country
            </small>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Current;
