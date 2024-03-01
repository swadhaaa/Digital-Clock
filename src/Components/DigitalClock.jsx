import { useEffect, useState } from "react";

function DigitalClock() {

    const [currentTime, setCurrentTime] = useState("Current Time");

    useEffect(() => {
        console.log("abc");
        const interval = setInterval(() => {
            console.log("in inside interval");
            const currentDate = new Date();
            setCurrentTime(currentDate.toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(interval);
        }

    }, [])
    return (
        <>
            <div className='container'>
                <h1>Digital Clock</h1>
                <h2><strong>{currentTime}</strong></h2>
            </div>
        </>
    )
}

export default DigitalClock;