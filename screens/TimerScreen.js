import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { handleLapTime, handleResetTimer, handleSave, handleStartTimer, handleStopTimer, toHoursMinutesSeconds } from '../components/handleTimer';
import LapList from '../components/LapList';
import { findAll } from '../database/localdb';

export default function TimerScreen({dbInitialized}) {
  const [time, setTime] = useState(0);
  const [intervalInUse, setIntervalInUse] = useState(false);
  const [clockStart, setClockStart] = useState(0);
  const [lapTimeList, setLapTimeList] = useState([]);

  useEffect(() => {
    findAll()
        .then(res => console.log(res))
  }, [dbInitialized]);

  let interval = null;

  useEffect(() => {
    if (intervalInUse) {
      interval = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    }
    else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [intervalInUse])

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Time Lord</Text>
      <View style={styles.timeView}>
        <Text style={styles.timer}>{toHoursMinutesSeconds(time)}</Text>
        <View style={styles.buttonView}>
          <Pressable style={styles.startButton} onPress={() => {
            handleStartTimer(intervalInUse, setIntervalInUse, setClockStart);
          }}><Text>Start</Text></Pressable>
          <Pressable style={styles.stopButton} onPress={() => {
            handleStopTimer(intervalInUse, setIntervalInUse);
          }}><Text>Stop</Text></Pressable>
          <Pressable style={styles.resetButton} onPress={() => {
            handleResetTimer(setTime, setClockStart, setLapTimeList);
          }}><Text>Reset</Text></Pressable>
          <Pressable style={styles.lapButton} onPress={() => {
            handleLapTime(intervalInUse, clockStart, setClockStart, setLapTimeList);
          }}><Text>Lap</Text></Pressable>
        </View>
      </View>
      <LapList lapTimeList={lapTimeList}></LapList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
    fontFamily: "Roboto",
    // justifyContent: 'center',
  },
  appTitle: {
    fontSize: 30,
  }, timeView: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  }, timer: {
    fontSize: 35,
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    maxHeight: 30,
  },
  startButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginHorizontal: 10,
    backgroundColor: "#C0C0C0",
    borderRadius: 4,
  },
  stopButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginHorizontal: 10,
    backgroundColor: "#C0C0C0",
    borderRadius: 4,
  },
  resetButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginHorizontal: 10,
    backgroundColor: "#C0C0C0",
    borderRadius: 4,
  },
  lapButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginHorizontal: 10,
    backgroundColor: "#C0C0C0",
    borderRadius: 4,
  }
});