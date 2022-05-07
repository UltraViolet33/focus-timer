import React from "react";
import { View, Text, StyleSheet, Vibration, Platform } from "react-native";
import { useState } from "react";
import { ProgressBar } from "react-native-paper";
import { fontSizes, spacing } from "../../utils/sizes";
import { colors } from "../../utils/colors";
import { Countdown } from "../../components/Countdown";
import { RoundedButton } from "../../components/RoundedButton";
import { Timing } from "./Timing";
import { useKeepAwake } from "expo-keep-awake";

const DEFAULT_TIME = 0.1;

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [minutes, setMinutes] = useState(DEFAULT_TIME);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const changeTime = (min) => {
    setMinutes(min);
  };

  const vibrate = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 1000);
    } else {
      Vibration.vibrate(2000);
    }
  };

  const onEnd = () => {
    console.log("tes");
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={onProgress}
          minutes={minutes}
          onEnd={onEnd}
        />
      </View>
      <View style={{ paddingTop: spacing.md }}>
        <Text style={styles.title}>Focusing on : </Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={{ paddingTop: spacing.md }}>
        <ProgressBar
          color="#5E84E2"
          progress={progress}
          style={{ height: 20 }}
        />
      </View>
      <View style={styles.btnContainer}>
        <Timing onChangeTime={changeTime} />
      </View>
      <View style={styles.btnContainer}>
        {isStarted ? (
          <RoundedButton
            title="stop"
            onpress={() => {
              setIsStarted(false);
            }}
          />
        ) : (
          <RoundedButton
            title="start"
            onpress={() => {
              setIsStarted(true);
            }}
          />
        )}
      </View>

      <View style={styles.clearSubject}>
        <RoundedButton title="-" size={60} onpress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: colors.white,
    textAlign: "center",
    fontSize: fontSizes.lg,
  },
  task: {
    textAlign: "center",
    fontSize: fontSizes.lg,
    color: colors.white,
    fontWeight: "bold",
  },
  btnContainer: {
    flex: 0.3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: spacing.md,
  },
  clearSubject: {
    padding: spacing.md,
  },
});
