import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather(props) {
  let displayData = {
    date: "Tuesday, 10:00",
    day: "22/05",
  };

  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState(props.citName);
  const [weather, setWeather] = useState({})

  function weatherData(response){
        setWeather({
            temperature: Math.round(response.data.main.temp),
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            humidity:response.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${
        response.data.weather[0].icon
      }@2x.png`
        })
  }
 
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "444dec86065a0dffc920fcea9a0aef12";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}
    &appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(weatherData);
  }

  function updateCity(event) {
    setCity(event.target.value.trim());
  }

  function fahrenheit(event) {
    event.preventDefault();
    let fahrenheitValue = Math.round((weather.temperature * 9) / 5 + 32);
    setTemperature(fahrenheitValue);
  }

  function celsius(event) {
    event.preventDefault();
    setTemperature(weather.temperature);
  }
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="City search"
          onChange={updateCity}
          autoFocus="on"
          autoComplete="off"
          className="form-control form-control-sm shadow-sm"
        />

        <input type="submit" value="🔍" className="btn btn-light shadow-sm" />
        <button className="btn btn-info shadow-sm"> Current Location </button>
      </form>

      <h1>{city}</h1>

      <ul>
        <li className="description">{weather.description}</li>

        <li>
          {" "}
          <span className="temperature">{weather.temperature}</span>{" "}
          <span className="units">
            <a href="#" className="active" onClick={celsius}>
              °C
            </a>{" "}
            |{" "}
            <a href="#" onClick={fahrenheit}>
              °F
            </a>{" "}
          </span>{" "}
        </li>

        <li>
          <img
            src={weather.icon}
            alt={weather.description}
            className="weatherIcon"
          />
        </li>

        <li className="date-now">{displayData.day}</li>

        <li>
          {" "}
          <i className="fas fa-water"></i>
          <span className="humidity"> {weather.humidity}%</span>
        </li>

        <li>
          <i className="fas fa-wind"></i>{" "}
          <span className="wind-speed"> {weather.wind}km/h</span>{" "}
        </li>

        <li className="current-time">{displayData.date}</li>
      </ul>
    </div>
  );
}
