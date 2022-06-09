export function toHoursMinutesSeconds(seconds) {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    if (secs < 10) {
        secs = "0" + secs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }

    return (`${hrs}:${mins}:${secs}`);
};

export function handleStartTimer(intervalInUse, setIntervalInUse) {
    if (!intervalInUse) {
        setIntervalInUse(true);
    }
    else {
        return;
    }
};

export function handleStopTimer(intervalInUse, setIntervalInUse) {
    if (intervalInUse) {
        setIntervalInUse(false);
    }
};

export function handleResetTimer(setTime) {
    setTime(0);
};

export function handleLapTime(lapTime, setLapTime) {
    let lap = Date.now() - lapTime;
    setLapTime(lap);
    console.log(lapTime);
};