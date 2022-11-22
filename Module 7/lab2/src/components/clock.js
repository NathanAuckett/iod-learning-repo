import {useState, useEffect, useContext} from "react";
import {EmojiContext} from "../App"


export default function Clock(props){
    const [time, setTime] = useState(new Date());
    const {emoji} = useContext(EmojiContext);

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
            {time.toTimeString()} {emoji}
        </div>
    )
}