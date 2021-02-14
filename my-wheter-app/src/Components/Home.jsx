import React, { useState, useEffect } from "react";
import {
  Nav,
  Navbar,
  Form,
  NavDropdown,
  FormControl,
  Button,
} from "react-bootstrap";
import Current from "./CurrentForcast/Current";
import Main from "./Main/Main";
import "./Home.css";

/**
 * CURRENT FORECAST 
https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


* CURRENT WHETER FOR ONE LOCATION api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


*HISTORICAL CALL  https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={API key}


- Nota bene convertire giorni/giorni in millisecondi per metterlo sul {time}

 */

function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentFor, setCurrentFor] = useState();
  const [showFor, setShowFor] = useState(true);

  const [loader, setLoader] = useState(true);
  const [showMain, setShowMain] = useState(true);

  //-------------------//

  const [days, setDays] = useState("3");

  const getWheter = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f10ab2fb813b0bacacb830ce8476f281`
      );

      if (response.ok) {
        console.log(response);
        const data = await response.json();
        console.log("I'm the current weather bitch--->", data);
        setData(data);
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // day*86400000= giorni in millisecondi

  const milliSecond = parseInt(days) * 86400000;

  const getCurrentForcast = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&exclude=minute,hourly&appid=f10ab2fb813b0bacacb830ce8476f281`
      );

      if (response.ok) {
        console.log(response);
        const data = await response.json();
        console.log("Get current4cast--->", data);
        setCurrentFor(data);
        setShowMain(!showMain);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const getHistoriaclCall = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${data.coord.lat}&lon=${data.coord.lon}&dt=${milliSecond}&appid=f10ab2fb813b0bacacb830ce8476f281`
  //     );

  //     if (response.ok) {
  //       console.log(response);
  //       const data = await response.json();
  //       console.log("i'm history--->", data);
  //       setHistoricalCall(data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSumbit = (e) => {
    e.preventDefault();

    getWheter(e);
    console.log("it's working");
  };

  useEffect(() => {
    getCurrentForcast();

    // getHistoriaclCall();
  }, [data]);

  return (
    <div className="container_main">
      <h1 className="mt-3 text-center">
        What's the weather like in your country?
      </h1>
      <Navbar
        expand="lg"
        className="the_nav"
        style={{ top: `${loader ? "28%" : "-100%"}` }}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form
            inline
            onSubmit={(e) => handleSumbit(e)}
            className="the_form_input"
          >
            <FormControl
              type="text"
              placeholder="City name..."
              value={search}
              className="mr-sm-2 w_input text-center"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button type="submit" className="the_main_button">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Main
        data={loader ? [] : data}
        loader={loader}
        setLoader={setLoader}
        showMain={showMain}
        setShowMain={setShowMain}
        setShowFor={setShowFor}
      />
      {currentFor ? (
        <Current
          showFor={showFor}
          currentFor={currentFor}
          setLoader={setLoader}
          showMain={showMain}
          setShowMain={setShowMain}
          setShowFor={setShowFor}
        />
      ) : (
        <p>Start searching... :)</p>
      )}
    </div>
  );
}

export default Home;

//currentFor={currentFor}
