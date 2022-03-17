import { useEffect } from "react";
import Pomodoro from "./components/Pomodoro";
import PomodoroContext from "./context/PomodoroContext";

function App() {
    useEffect(() => {
        if (!("Notification" in window)) {
            console.log("This browser does not support desktop notification");
          } else {
            Notification.requestPermission();
          }
    }, [])
    
    return (
        <div className="App">
            <PomodoroContext>
                <Pomodoro />
            </PomodoroContext>
        </div>
    );
}

export default App;
