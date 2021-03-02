import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastPreview(props){

    function setHours() {
        let date = new Date(props.data.dt*1000);
        let hours = date.getHours();
        if(hours<10){
            hours = `0${hours}`;
        }
        return `${hours}:00`
    }

    function temperature() {
        let temperature = Math.round(props.data.main.temp)
        return`${temperature}°C`
    }
   return  <div className="ForecastPreview col-2">
   <h4> {setHours()} </h4>
            <WeatherIcon code={props.data.weather[0].icon} />
            <strong className="temp">{temperature()} </strong>
            <br />
            <i className="fas fa-water"></i> {props.data.main.humidity}%
            <br />
            <i className="fas fa-wind"></i> {props.data.wind.speed}km/h
            </div>
}