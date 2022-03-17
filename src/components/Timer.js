/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import TimerButton from "./TimerButton";

function Timer() {
    const [startTimer, setstartTimer] = useState(false);
    // const [breakTime, setBreakTime] = useState(0);
    let timerId = null;
    const hoursMinSecs = { hours: 0, minutes: 20, seconds: 0 };
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);

    const tick = () => {
        if (hrs === 0 && mins === 0 && secs === 0) {
            try {
                new Notification("Hey");
            } catch (error) {
                console.log(error);
            }
            reset();
        } else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };
    const reset = () => {
        setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
    };
    const pauseOrStartClick = (value, time) => {
        if (value) {
            setstartTimer(true);
            setTime([parseInt(hrs), parseInt(time ? time : 20), parseInt(secs)]);
        } else {
            clearInterval(timerId);
        }
    };
    useEffect(() => {
        if (startTimer) {
            timerId = setInterval(tick, 1000);
        }
        return () => clearInterval(timerId);
    });
    return (
        <>
            <div>
                <p>{`${hrs.toString().padStart(2, "0")}:${mins
                    .toString()
                    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}</p>
            </div>
            <TimerButton
                pauseOrStartClick={(value, breakTIme) =>
                    pauseOrStartClick(value, breakTIme)
                }
                onResetClick={reset}
            />
        </>
    );
}

export default Timer;
