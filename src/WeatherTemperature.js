import React, {useState} from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsius")

function fahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
}

function countFahrenheit(){
     return (Math.round((props.celsius * 9) / 5 + 32));
}

  function celsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if(unit==="celsius"){
    return <div className="WeatherTemperature"> 
    <span className="temperature">{props.celsius}</span>
          <span className="units">
              °C
            |{" "}
            <a href="/" onClick={fahrenheit}>
              °F
            </a>{" "}
          </span>{" "}
          </div>
  } else{
         return <div className="WeatherTemperature"> 
    <span className="temperature">{countFahrenheit()}</span>
          <span className="units">
            <a href="/"  onClick={celsius} >
              °C
            </a>{" "}
            |{" "}
              °F
          </span>{" "}
          </div>
  }
}