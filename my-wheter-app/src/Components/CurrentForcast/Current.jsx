import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Current.css";

function Current({ currentFor, showFor }) {
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
          <p className="legend">Legend 1</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Current;
