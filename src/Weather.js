import React, { useState } from "react";
import "./Weather.css";
export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday, 10:00",
    day: "22/05",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10
  };

  const [temperature, setTemperature] = useState(weatherData.temperature);
  const [city, setCity] = useState(weatherData.city);
  const [message, setMessage] = useState(weatherData.city);

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      setMessage(`${city}`);
    } else {
      alert("Enter a city");
    }
  }

  function updateCity(event) {
    setCity(event.target.value.trim());
  }

  function fahrenheit(event) {
    event.preventDefault();
    let fahrenheitValue = Math.round((weatherData.temperature * 9) / 5 + 32);
    setTemperature(fahrenheitValue);
  }

  function celsius(event) {
    event.preventDefault();
    setTemperature(weatherData.temperature);
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

      <h1>{message}</h1>

      <ul>
        <li className="description">{weatherData.description}</li>

        <li>
          {" "}
          <span className="temperature">{temperature}</span>{" "}
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
            src={weatherData.imgUrl}
            alt={weatherData.description}
            className="weatherIcon"
          />
        </li>

        <li className="date-now">{weatherData.day}</li>

        <li>
          {" "}
          <i className="fas fa-water"></i>
          <span className="humidity"> {weatherData.humidity}%</span>
        </li>

        <li>
          <i className="fas fa-wind"></i>{" "}
          <span className="wind-speed"> {weatherData.wind}km/h</span>{" "}
        </li>

        <li className="current-time">{weatherData.date}</li>
      </ul>
    </div>
  );
}
