import React from "react";
import { Card, Button } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import moment from "moment";

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
                <Card.Img
                  variant="top"
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  style={{
                    backgroundColor: "rgb(201, 136, 201)",
                    heigth: "80px",
                    width: "80px",
                  }}
                  className="card_icon"
                />
                <Card.Title>{day.weather[0].description}</Card.Title>
                {moment.unix(`${day.dt}`).format("dddd")}
                <br />
                Avg temperature day:
                {Math.ceil(day.temp.day)}°
                <br />
                Avg temperature morning:
                {Math.ceil(day.temp.morn)}°
                <br />
                Avg temperature eve:
                {Math.ceil(day.temp.eve)}°
                <br />
                Avg temperature night:
                {Math.ceil(day.temp.night)}°
                <br />
                <small
                  style={{ width: "10px" }}
                  className="legend"
                  onClick={() => restStart()}
                >
                  Search again
                </small>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Current;
