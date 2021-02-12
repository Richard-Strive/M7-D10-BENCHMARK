import React, { useState, useEffect } from "react";
import {
  Nav,
  Navbar,
  Form,
  NavDropdown,
  FormControl,
  Button,
} from "react-bootstrap";

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
  const [days, setDays] = useState("");

  const getWheter = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f10ab2fb813b0bacacb830ce8476f281`
      );

      if (response.ok) {
        console.log(response);
        const data = await response.json();
        console.log(data);
        setData(data);
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
        `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lon}&lon=${data.coord.lat}&appid=f10ab2fb813b0bacacb830ce8476f281`
      );

      if (response.ok) {
        console.log(response);
        const data = await response.json();
        console.log(data);
        setCurrentFor(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getHistoriaclCall = async () => {
    try {
      const response = await fetch(
        `https://https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${data.coord.lat}&lon=${data.coord.lon}&dt={time}&appid=f10ab2fb813b0bacacb830ce8476f281`
      );

      if (response.ok) {
        console.log(response);
        const data = await response.json();
        console.log(data);
        setCurrentFor(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    getWheter(e);
    console.log("fuck");
  };

  useEffect(() => {
    getCurrentForcast();
  }, [data]);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline onSubmit={(e) => handleSumbit(e)}>
            <FormControl
              type="text"
              placeholder="Search"
              value={search}
              className="mr-sm-2"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Home;
