import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Loader from "react-loader-spinner";
export default function Weather(props) {

  
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ready: false})
  
  function weatherData(response){
      
        setWeather({
            ready: true,
            city: response.data.name,
            date: new Date(response.data.dt*1000), 
            day: new Date(response.data.dt*1000), 
            temperature: Math.round(response.data.main.temp),
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            humidity:response.data.main.humidity,
            icon: response.data.weather[0].icon
      
        })
  }
 
  function search(){
     const apiKey = "444dec86065a0dffc920fcea9a0aef12";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}
    &appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(weatherData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value.trim());
  }

  
  if(weather.ready){
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
      </form>

        <WeatherInfo info={weather}/>
     
    </div>
  );} else{
     search();
    return  (  <Loader 
        type="Rings"
        color="#8c0000"
        height={500}
        width={500}
        radius={400}
      />);
    
  }

}
