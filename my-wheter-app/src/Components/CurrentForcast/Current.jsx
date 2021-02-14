import React from "react";
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
        <div>
          <img
            src="https://source.unsplash.com/random"
            style={{ height: "200px" }}
          />
          <p className="legend" onClick={() => restStart()}>
            Click here to check the weather of another country
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default Current;
