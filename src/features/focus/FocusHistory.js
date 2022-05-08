import { SafeAreaView, Text, FlatList, StyleSheet, View } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { fontSizes, spacing } from "../../utils/sizes";
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
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things I have focused on :</Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: "center" }}
              data={focusHistory}
              renderItem={HistoryItem}
              keyExtractor={(item) => item.key}
            />
            <View style={styles.clearContainer}>
              <RoundedButton size={80} title="clear" onpress={onClear} />
            </View>
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
  clearContainer: {
    alignItems: "center",
    padding: spacing.lg,
  },
});
