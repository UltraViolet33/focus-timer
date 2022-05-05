import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { ProgressBar } from "react-native-paper";
import { fontSizes, spacing } from "../../utils/sizes";
import { colors } from "../../utils/colors";
import { Countdown } from "../../components/Countdown";
import { RoundedButton } from "../../components/RoundedButton";
import { Timing } from "./Timing";

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [minutes, setMinutes] = useState(12);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const changeTime = (min) => {
    setMinutes(min);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={onProgress}
          minutes={minutes}
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
});
