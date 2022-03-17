import React from "react";
import ClockTime from "./ClockTime";
import Timer from "./Timer";
import PomodoroContext from '../context/PomodoroContext';

function Pomodoro() {
    return (
        <PomodoroContext>
            <ClockTime />
            <Timer />
        </PomodoroContext>
    );
}

export default Pomodoro;
