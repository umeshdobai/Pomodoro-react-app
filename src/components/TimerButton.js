/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import Context from "../context/context";

function TimerButton(props) {
    const [pauseOrStart, setpauseOrStart] = useState(false);
    const pomodContext = useContext(Context);
    const { pomodoroInitialState } = pomodContext;

    const onPauseOrStartClick = () => {
        setpauseOrStart(!pauseOrStart);
    };
    useEffect(() => {
        props.pauseOrStartClick(
            pauseOrStart,
            pomodoroInitialState
        );
    }, [pauseOrStart]);

    return (
        <div>
            <button onClick={onPauseOrStartClick}>
                {pauseOrStart ? "Pause" : "Start"}
            </button>
            <button onClick={props.onResetClick}>Reset</button>
        </div>
    );
}

export default TimerButton;
