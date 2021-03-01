import React from "react";

export default function FormattedDate(props){

    
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = weekDay[props.day.getDay()];
    let hours = props.day.getHours();
    if(hours< 10){
        hours=`0${hours}`;
    }
    let minutes = props.day.getMinutes();
    if(minutes< 10){
        minutes=`0${minutes}`;
    }
    return <div>
        {day}, {hours}:{minutes}
    </div>


}