import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Focus } from "./src/features/focus/Focus";
import { Timer } from "./src/features/timer/Timer";
import { colors } from "./src/utils/colors";
import { spacing } from "./src/utils/sizes";
import { FocusHistory } from "./src/features/focus/FocusHistory";

const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 2,
};

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const onTimerEnd = () => {
    addFocusHistory(focusSubject, STATUSES.COMPLETE);
    setFocusSubject(null);
  };

  const clearSubject = () => {
    addFocusHistory(focusSubject, STATUSES.CANCELLED);
    setFocusSubject(null);
  };

  const addFocusHistory = (subject, status) => {
    setFocusHistory([...focusHistory, { subject, status }]);
  };

  const clearHistory = () => {
    setFocusHistory([]);
  };

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          onTimerEnd={onTimerEnd}
          focusSubject={focusSubject}
          clearSubject={clearSubject}
        />
      ) : (
        <>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory focusHistory={focusHistory} onClear={clearHistory} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingTop: spacing.xxl,
  },
});
