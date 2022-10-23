import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {

let [city, setCity] = useState("");
const [data, setData] = useState(false);
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
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    description: response.data.weather[0].description,
  });
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
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Weather App with React</p>
        </header>
      </div>
      {searchForm}
      <ul>
        <li className="list">
          Temperature: {Math.round(weather.temperature)}°C
        </li>
        <li className="list">Description: {weather.description}</li>
        <li className="list">Humidity: {weather.humidity}%</li>
        <li className="list">Wind: {weather.wind}km/h</li>
        <li className="list">
          <img src={weather.icon} alt={weather.description} className="list" />
        </li>
      </ul>
    </div>
  );
} else {
  return searchForm;
}

}

export default App;
