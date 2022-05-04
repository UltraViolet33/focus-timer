import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const RoundedButton = ({
  size = 125,
  style = {},
  textStyle = {},
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} >
      <Text style={[styles(size).text , textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) => StyleSheet.create({
  radius:{
    borderRadius: size /2,
    width: size,
    height: size,
    alignItems: "center",
    borderColor : '#fff',
    borderWidth: 2,
  },

  text: {
    color: '#fff',
    fontSize: size / 3,
  }
});
