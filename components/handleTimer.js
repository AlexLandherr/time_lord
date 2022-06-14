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

export function handleStartTimer(intervalInUse, setIntervalInUse, setClockStart) {
    if (!intervalInUse) {
        setIntervalInUse(true);
        setClockStart(Date.now());
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

export function handleResetTimer(setTime, setClockStart, setLapTimeList) {
    setTime(0);
    setClockStart(0);
    setLapTimeList([]);
};

export function handleLapTime(intervalInUse, clockStart, setClockStart, lapTimeList, setLapTimeList) {
    if (intervalInUse && clockStart !== 0) {
        let lap = Math.round(((Date.now() - clockStart) / 1000)); //Rounding to nearest second.
        setClockStart(Date.now());
        setLapTimeList(lapTimeList => [...lapTimeList, lap]);
    } else if (intervalInUse && clockStart === 0) {
        return;
    };
};

export function handleSave() {};