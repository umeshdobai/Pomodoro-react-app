import React, { useReducer } from "react";
import Context from "./context";
import {
    initialState,
    PomodoroReducer,
    updateBreakTime,
    updateFromTime,
    updateGlobalTime,
    updateToTime,
} from "./reducer";

function PomodoroContext(props) {
    const [pomodoroInitialState, dispatch] = useReducer(
        PomodoroReducer,
        initialState
    );
    const setglobalTIme = (value) => {
        dispatch(updateGlobalTime(value));
    };
    const setFromTimeValue = (value) => {
        dispatch(updateFromTime(value));
    };
    const setToTimeValue = (value) => {
        dispatch(updateToTime(value));
    };
    const setbreakTimeValue = (value) => {
        dispatch(updateBreakTime(value));
    };
    return (
        <Context.Provider
            value={{
                pomodoroInitialState,
                dispatch,
                setglobalTIme,
                setFromTimeValue,
                setToTimeValue,
                setbreakTimeValue,
            }}
        >
            {props.children}
        </Context.Provider>
    );
}

export default PomodoroContext;
