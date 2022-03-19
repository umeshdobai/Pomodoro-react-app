/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { windowNotification } from "../common/Common";
import BreakTimer from "./BreakTimer";
import TimerButton from "./TimerButton";

function FocusTimer() {
    const [startTimer, setstartTimer] = useState(false);
    let timerId,
        timerId1 = null;
    const hoursMinSecs = { hours: 0, minutes: 0, seconds: 10 };
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
    const [pomodoroInitialState, setpomodoroInitialState] = useState({});
    const [resetClick, setresetClick] = useState("Focus Time");

    const tick = () => {
        if (hrs === 0 && mins === 0 && secs === 0) {
            focusTimerReset();
        } else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };
    const focusTimerReset = () => {
        setresetClick("Break Time");
        windowNotification("Break Time");
        setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
    };
    const pauseOrStartClick = (value, initialState) => {
        if (value) {
            windowNotification("Focus Time");
            const { breakTimeValue } = initialState;
            setpomodoroInitialState(initialState);
            setstartTimer(true);
            setTime([
                parseInt(hrs),
                parseInt(breakTimeValue ? breakTimeValue : 0),
                parseInt(secs),
            ]);
        } else {
            clearInterval(timerId);
        }
    };
    useEffect(() => {
        if (startTimer) {
            if (resetClick === "Focus Time") {
                timerId = setInterval(tick, 1000);
            }
        }
        return () => clearInterval(timerId, timerId1);
    });
    return (
        <>
            <div>
                Focus Timer
                <p>{`${hrs.toString().padStart(2, "0")}:${mins
                    .toString()
                    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}</p>
            </div>
            <BreakTimer resetClick={resetClick} setresetClick={setresetClick} />
            <TimerButton
                pauseOrStartClick={(value, intialState) =>
                    pauseOrStartClick(value, intialState)
                }
                onResetClick={focusTimerReset}
            />
        </>
    );
}

export default FocusTimer;
