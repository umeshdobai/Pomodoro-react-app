/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { windowNotification } from "../common/Common";

function BreakTimer(props) {
    let timerId1 = null;
    const hoursMinSecs1 = { hours1: 0, minute1s: 0, seconds1: 10 };
    const { hours1 = 0, minutes1 = 0, seconds1 = 60 } = hoursMinSecs1;
    const [[hrs1, mins1, secs1], setTime1] = useState([
        hours1,
        minutes1,
        seconds1,
    ]);
    const { resetClick, setresetClick } = props;
    const tick1 = () => {
        if (hrs1 === 0 && mins1 === 0 && secs1 === 0) {
            breakTimerReset();
        } else if (mins1 === 0 && secs1 === 0) {
            setTime1([hrs1 - 1, 59, 59]);
        } else if (secs1 === 0) {
            setTime1([hrs1, mins1 - 1, 59]);
        } else {
            setTime1([hrs1, mins1, secs1 - 1]);
        }
    };
    const breakTimerReset = () => {
        setresetClick("Focus Time");
        windowNotification("Focus Time");
        setTime1([parseInt(hours1), parseInt(minutes1), parseInt(seconds1)]);
    };
    useEffect(() => {
        if (resetClick === "Break Time") timerId1 = setInterval(tick1, 1000);
        return () => clearInterval(timerId1);
    });
    return (
        <div>
            Break Timer
            <p>{`${hrs1.toString().padStart(2, "0")}:${mins1
                .toString()
                .padStart(2, "0")}:${secs1.toString().padStart(2, "0")}`}</p>
        </div>
    );
}

export default BreakTimer;
