import React from "react";
import "./Main.css";

function Main({ data }) {
  console.log(data);
  return (
    <div className="main_container">
      {data.name}
      <br />
      {data.weather[0].main}
      <br />
      Temperature:
      {Math.ceil(data.main.temp - 273.15)} C
    </div>
  );
}

export default Main;
