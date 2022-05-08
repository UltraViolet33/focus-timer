import { Text, StyleSheet, TouchableOpacity } from "react-native";

export const RoundedButton = ({
  size = 125,
  style = {},
  textStyle = {},
  focusItem = "",
  title,
  onpress,
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={() => onpress(focusItem)}
    >
      <Text style={[styles(size).text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#fff",
      borderWidth: 2,
    },
    text: {
      color: "#fff",
      fontSize: size / 3,
    },
  });
