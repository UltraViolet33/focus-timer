import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButtons}>
        <RoundedButton
          size={75}
          title="10"
          onpress={() => {
            onChangeTime(10);
          }}
        />
      </View>
      <View style={styles.timingButtons}>
        <RoundedButton
          size={75}
          title="25"
          onpress={() => {
            onChangeTime(25);
          }}
        />
      </View>
      <View style={styles.timingButtons}>
        <RoundedButton
          size={75}
          title="45"
          onpress={() => {
            onChangeTime(45);
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButtons: {
    flex: 1,
    alignItems: "center",
  },
});
