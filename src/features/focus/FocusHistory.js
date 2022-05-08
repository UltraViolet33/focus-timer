import { SafeAreaView, Text, FlatList, StyleSheet } from "react-native";
import { fontSizes } from "../../utils/sizes";
import { colors } from "../../utils/colors";

const HistoryItem = ({ item }) => {
  return (
    <>
      <Text style={styles.historyItem(item.status)}>{item.subject}</Text>
    </>
  );
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: "center" }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things I have focused on :</Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: "center" }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? "red" : "green",
    fontSize: fontSizes.md,
  }),
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
  },
});
