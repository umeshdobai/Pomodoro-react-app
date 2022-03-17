/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import Context from "../context/context";

function ClockTime() {
    const pomodContext = useContext(Context);
    const {
        pomodoroInitialState,
        setglobalTIme,
        setFromTimeValue,
        setToTimeValue,
        setbreakTimeValue,
    } = pomodContext;

    useEffect(() => {
        setglobalTIme(
            setInterval(() => {
                setglobalTIme(new Date().toLocaleString());
            }, 30)
        );
        return () => {
            clearTimeout(pomodoroInitialState.globalTIme);
        };
    }, []);

    function breakTimeHandleChange(e) {
        setbreakTimeValue(e.target.value);
    }

    return (
        <div>
            {pomodoroInitialState.globalTIme}
            <div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                        label="From"
                        value={pomodoroInitialState.fromTimevalue}
                        onChange={(newValue) => {
                            setFromTimeValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                        label="To"
                        value={pomodoroInitialState.toTimevalue}
                        onChange={(newValue) => {
                            setToTimeValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
            <div>
                <input
                    type="text"
                    value={pomodoroInitialState.breakTimeValue}
                    placeholder="Break time Interval"
                    onChange={breakTimeHandleChange}
                />
            </div>
        </div>
    );
}

export default ClockTime;
