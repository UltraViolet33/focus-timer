import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { fontSizes, spacing } from "../../utils/sizes";
import { colors } from "../../utils/colors";

export const Timer = ({focusSubject}) => {

  return (
    <View style={styles.container}>
        <View style={{paddingTop: spacing.md}}> 
            <Text style={styles.title}>Focusing on : </Text>
            <Text style={styles.task}>{focusSubject}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  title: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: fontSizes.lg,
  },
  task: {
    textAlign: "center",
    fontSize: fontSizes.lg,
  }
});
