export function windowNotification(typeOfTime){
    try {
        switch (typeOfTime) {
            case "Break Time":
                new Notification("Break Time");
                break;
            case "Focus Time":
                new Notification("Focus Time");
                break;
            default:
                break;
        }
    } catch (error) {
        console.log(error);
    }
}