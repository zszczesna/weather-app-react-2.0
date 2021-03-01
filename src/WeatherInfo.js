import React,{useState} from "react"
import DisplayDay from "./DisplayDay";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
const [temperature, setTemperature] = useState(null);

function fahrenheit(event) {
    event.preventDefault();
    let fahrenheitValue = Math.round((props.info.temperature * 9) / 5 + 32);
    setTemperature(fahrenheitValue);
  }

  function celsius(event) {
    event.preventDefault();
    setTemperature(props.info.temperature);
  }
    return <div className="WeatherInfo">
         <h1>{props.info.city}</h1>

      <ul>
        <li className="description  text-capitalize" >{props.info.description}</li>

        <li>
          {" "}
          <span className="temperature">{props.info.temperature}</span>{" "}
          <span className="units">
            <a href="#" className="active" onClick={celsius} >
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
            src={props.info.icon}
            alt={props.info.description}
            className="weatherIcon"
          />
        </li>

        <li className="date-now"><DisplayDay date={props.info.date}/></li>

        <li>
          {" "}
          <i className="fas fa-water"></i>
          <span className="humidity"> {props.info.humidity}%</span>
        </li>

        <li>
          <i className="fas fa-wind"></i>{" "}
          <span className="wind-speed"> {props.info.wind}km/h</span>{" "}
        </li>

        <li className="current-time"><FormattedDate day={props.info.date} /></li>
      </ul>
    </div>


}