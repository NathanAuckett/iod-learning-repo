import {useState, useEffect} from "react";


export default function Clock(props){
    const [time, setTime] = useState(new Date());

    const clock = setInterval(() => {
        setTime(new Date());
    }, 1000);

    useEffect(() => {
        return () => {
            clearInterval(clock);
            console.log("Cleaned up clock.");
        }
    }, []);

    return (
        <div>
            {time.toTimeString()}
        </div>
    )
}