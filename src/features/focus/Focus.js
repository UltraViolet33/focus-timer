import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/RoundedButton";
import { fontSizes, spacing } from "../../utils/sizes";
import { colors } from "../../utils/colors";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What would you like to focus on ?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} onChangeText={setSubject} />
          <RoundedButton
            size={50}
            title="+"
            focusItem={subject}
            onpress={addSubject}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: spacing.md,
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: fontSizes.md,
  },
  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginRight: spacing.md,
  },
});
