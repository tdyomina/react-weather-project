import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

const defaults = {
  size: 50,
  animate: true,
};

function App() {
  let [city, setCity] = useState("London");
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
  }

  let searchForm = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city.." onChange={updateCity} />
      <button type="Submit">Search</button>
    </form>
  );
  if (data) {
    return (
      <div className="App">
        {searchForm}
        <ul>
          <li className="list">
            Temperature: {Math.round(weather.temperature)}°C
          </li>
          <li className="list">Description: {weather.description}</li>
          <li className="list">Humidity: {weather.humidity}%</li>
          <li className="list">Wind: {weather.wind}km/h</li>
          <li className="list">
            <img
              src={weather.icon}
              alt={weather.description}
              className="list"
            />
          </li>
        </ul>
        <div>
          <div className="weather">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="goldenrod"
              size={defaults.size}
              animate={defaults.animate}
            />
            <ReactAnimatedWeather
              icon="SNOW"
              color="gray"
              size={defaults.size}
              animate={defaults.animate}
            />
            <ReactAnimatedWeather
              icon="PARTLY_CLOUDY_DAY"
              color="pink"
              size={defaults.size}
              animate={defaults.animate}
            />
            <ReactAnimatedWeather
              icon="SLEET"
              color="blue"
              size={defaults.size}
              animate={defaults.animate}
            />
          </div>
          <div>
            <a
              href="https://github.com/tdyomina/react-weather-project"
              alt="my Git link"
              target="_blank"
              rel="noreferrer"
            >
              my Git
            </a>
          </div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Weather App with React</p>
          </header>
        </div>
      </div>
    );
  } else {
    return searchForm;
  }
}

export default App;
