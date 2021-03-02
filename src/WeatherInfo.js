import React from "react"
import DisplayDay from "./DisplayDay";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props){

    return <div className="WeatherInfo">
         <h1>{props.info.city}</h1>

      <ul>
        <li className="description  text-capitalize" >{props.info.description}</li>

        <li>
          {" "}
          <WeatherTemperature celsius={props.info.temperature}/>
         
        </li>

        <li>
          <WeatherIcon code={props.info.icon}  />
         
        </li>

        <li className="date-now"><DisplayDay date={props.info.date}/></li>

        <li>
          {" "}
          <i className="fas fa-water"></i>
          <span className="humidity"> {props.info.humidity}%</span>
        </li>

        <li>
          <i className="fas fa-wind"></i>{" "}
          <span className="wind-speed"> {(props.info.wind*3.6).toFixed(1)}km/h</span>{" "}
        </li>

        <li className="current-time"><FormattedDate day={props.info.date} /></li>
      </ul>
    </div>


}