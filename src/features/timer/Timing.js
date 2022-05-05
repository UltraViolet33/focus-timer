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
          title="15"
          onpress={() => {
            onChangeTime(15);
          }}
        />
      </View>
      <View style={styles.timingButtons}>
        <RoundedButton
          size={75}
          title="20"
          onpress={() => {
            onChangeTime(12);
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
