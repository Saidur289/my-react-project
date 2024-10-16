import React, {useState, useEffect} from "react";
import './clock.css'
function DisitalClock(){
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interValid = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(interValid)
        }
    }, [])
    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${hours}:${minutes}:${seconds} ${meridiem}`;
    }

    return(
        <div className="clock">
            <span >{formatTime()}</span>
           
        </div>
    )
}
export default DisitalClock