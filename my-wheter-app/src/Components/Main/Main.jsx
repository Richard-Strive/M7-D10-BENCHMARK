import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Main.css";

function Main({ data, loader, setLoader, setShowFor, showMain, setShowMain }) {
  const setForCast = () => {
    setShowFor(false);
    setShowMain(!showMain);
  };
  const setBack = () => {
    setLoader(!loader);
    setShowMain(!showMain);
  };

  return (
    <div
      className="main_container"
      style={{ bottom: `${showMain ? "-2000% " : "20%"}` }}
    >
      {loader ? (
        "Loading..."
      ) : (
        <Card style={{ width: "100%" }} className="card_main">
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>{data.weather[0].main}</Card.Text>
            <Card.Img
              variant="top"
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              style={{
                backgroundColor: "lightgray",
                heigth: "80px",
                width: "80px",
              }}
              className="card_icon"
            />
            <br />
            Avg temperature:
            {Math.ceil(data.main.temp - 273.15)}°
            <br />
            MAX:
            {Math.ceil(data.main.temp_max - 273.15)}°
            <br />
            MIN:
            {Math.ceil(data.main.temp_min - 273.15)}°
          </Card.Body>
          <Button
            style={{ height: "20%", width: "34%", color: "" }}
            onClick={() => setBack()}
            className="the_w_b"
          >
            Search another country
          </Button>
          <Button
            style={{ height: "20%", width: "34%", color: "" }}
            onClick={() => setForCast()}
            className="the_w_b2"
          >
            Click here for 7 day's Forecast
          </Button>
        </Card>
      )}
    </div>
  );
}

export default Main;

{
  /* {data.name}
  <br />
  {data.weather[0].main}
  <br />
  Temperature:
  {Math.ceil(data.main.temp - 273.15)} */
}
