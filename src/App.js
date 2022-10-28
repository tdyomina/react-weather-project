import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Days from "./Days";
import MainIcon from "./MainIcon";

function App(props) {
  let [city, setCity] = useState(props.city);
  const [data, setData] = useState(true);
  const [weather, setWeather] = useState({});

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setData(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "a9437c2e53c3ece57f9ae4c5c0193488";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    console.log(displayWeather);
  }

  let searchForm = (
    <div className="searchForm d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <div className="row p-5">
          <div className="col-9">
            <input
              type="search"
              className="form-control"
              placeholder="Type a city.."
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <button type="Submit" className="btn btn-light">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
  if (data) {
    return (
      <div className="App">
        <h1 className="App-header-h1">Weather Search by City</h1>
        {searchForm}
        <ul>
          <li className="list">
            Temperature: {Math.round(weather.temperature)}°C
          </li>
          <li className="list">Description: {weather.description}</li>
          <li className="list">Humidity: {weather.humidity}%</li>
          <li className="list">Wind: {Math.round(weather.wind)}km/h</li>
          <li className="list">
            <MainIcon />
          </li>
        </ul>
        <div>
          <Days />
        </div>

        <div>
          <a
            href="https://github.com/tdyomina/react-weather-project"
            alt="my Git link"
            target="_blank"
            rel="noopener noreferrer"
          >
            my Git
          </a>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Weather App with React</p>
        </header>
      </div>
    );
  } else {
    return searchForm;
  }
}

export default App;
