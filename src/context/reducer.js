const UPDATE_GLOBAL_TIME = "UPDATE_GLOBAL_TIME";
const uPDATE_FROM_TIME = "uPDATE_FROM_TIME";
const UPDATE_TO_TIME = "UPDATE_TO_TIME";
const UPDATE_BREAK_TIME = "UPDATE_BREAK_TIME";

//states
export const initialState = {
    globalTIme: new Date().toLocaleString(),
    fromTimevalue: null,
    toTimevalue: null,
    breakTimeValue: "",
};

//Actions
export const updateGlobalTime = (globalTIme) => ({
    type: UPDATE_GLOBAL_TIME,
    globalTIme,
});
export const updateFromTime = (fromTimevalue) => ({
    type: uPDATE_FROM_TIME,
    fromTimevalue,
});
export const updateToTime = (toTimevalue) => ({
    type: UPDATE_TO_TIME,
    toTimevalue,
});
export const updateBreakTime = (breakTimeValue) => ({
    type: UPDATE_BREAK_TIME,
    breakTimeValue,
});

//reducer fucntion
export const PomodoroReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_GLOBAL_TIME:
            return { ...state, globalTIme: action.globalTIme };
        case uPDATE_FROM_TIME:
            return { ...state, fromTimevalue: action.fromTimevalue };
        case UPDATE_TO_TIME:
            return { ...state, toTimevalue: action.toTimevalue };
        case UPDATE_BREAK_TIME:
            return { ...state, breakTimeValue: action.breakTimeValue };
        default:
            return { state };
    }
};
