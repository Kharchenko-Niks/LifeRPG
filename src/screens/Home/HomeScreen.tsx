import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Spacing } from "@/constants/theme";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="title" style={styles.title}>
          LifeRPG
        </ThemedText>

        <ThemedView type="backgroundElement" style={styles.section}>
          <ThemedText type="subtitle">Character</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            Your character will appear here.
          </ThemedText>
        </ThemedView>

        <ThemedView type="backgroundElement" style={styles.section}>
          <ThemedText type="subtitle">Level & XP</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            XP and level progress will appear here.
          </ThemedText>
        </ThemedView>

        <ThemedView type="backgroundElement" style={styles.section}>
          <ThemedText type="subtitle">Current Quests</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            Active quests will appear here.
          </ThemedText>
        </ThemedView>

        <ThemedView type="backgroundElement" style={styles.section}>
          <ThemedText type="subtitle">Main Goal</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            Your current goal will appear here.
          </ThemedText>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.five,
    gap: Spacing.four,
  },
  title: {
    textAlign: "center",
  },
  section: {
    gap: Spacing.two,
    padding: Spacing.four,
    borderRadius: Spacing.three,
  },
});
