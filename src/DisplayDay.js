import React from "react";

export default function FormattedDate(props){

    let months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
    let month = months[props.date.getMonth()];
    let day = props.date.getDay();
    if(day<10){
        day=`0${day}`;
    }
    return <div>
        {day}/{month}
    </div>


}