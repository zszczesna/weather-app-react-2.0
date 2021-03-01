import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props){
    
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
         "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "CLOUDY",
        "04d": "CLOUDY",
        "09d": "RAIN",
        "10d": "RAIN",
        "11d": "RAIN",
        "13d": "SNOW",
        "50d": "FOG",
         "03n": "CLOUDY",
        "04n": "CLOUDY",
        "09n": "RAIN",
        "10n": "RAIN",
        "11n": "RAIN",
        "13n": "SNOW",
        "50n": "FOG"
    }
    const colorMapping = {
        "01d": "#fff600",
        "01n": "#7b8993",
        "02d": "#becdd4",
        "02n": "#8b3c89",
        "03d": "#aaaaaa",
        "04d": "#aaaaaa",
        "09d": "#afc3cc",
        "10d": "#afc3cc",
        "11d": "#afc3cc",
        "13d": "#fffafa",
        "50d": "#f0ffff ",
         "03n": "#aaaaaa",
        "04n": "#aaaaaa",
        "09n": "#afc3cc",
        "10n": "#afc3cc",
        "11n": "#afc3cc",
        "13n": "#fffafa",
        "50n": "#f0ffff "
    }

   return (
   <ReactAnimatedWeather className = "WeatherIcon"
    icon={codeMapping[props.code]}
    color={colorMapping[props.code]}
    size={64}
  /> );
}
    