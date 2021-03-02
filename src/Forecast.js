import React, {useState} from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";

export default function Forecast(props){
    const [flag, setFlag] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecastResponse(response){
        setForecast(response.data);
        setFlag(true);
    }

    if(flag && props.city === forecast.city.name ){
        return( <div className="Forecast row">
                    <ForecastPreview data={forecast.list[0]}/>  
                     <ForecastPreview data={forecast.list[1]}/>   
                      <ForecastPreview data={forecast.list[2]}/>   
                       <ForecastPreview data={forecast.list[3]}/>   
                        <ForecastPreview data={forecast.list[4]}/>   
                         <ForecastPreview data={forecast.list[5]}/>       
        </div>);
    }else{
    const apiKey = "3b09acba9508665a1471bb811fda2690";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}
    &appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
    }

    
    
   
}