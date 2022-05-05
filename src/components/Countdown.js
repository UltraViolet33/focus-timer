import { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

const minutesToMilli = (min) => min * 1000 * 60;

const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 1, isPaused }) => {
  const interval = useRef(null);
  const [millis, setMillis] = useState(minutesToMilli(minutes));
  const minutesLeft = Math.floor(millis / 1000 / 60) % 60;
  const secondsLeft = Math.floor(millis / 1000) % 60;

  const countdown = () => {
    setMillis((time) => {
      if (time === 0) {
        //do smt
        return time;
      }

      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }
    interval.current = setInterval(countdown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);
  return (
    <Text style={styles.text}>
      {formatTime(minutesLeft)}: {formatTime(secondsLeft)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: "bold",
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: colors.lightBlue,
  },
});
