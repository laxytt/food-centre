import React from "react";

import { View, Text, StyleSheet, StatusBar } from "react-native";
import { COLORS } from "./src/global/styles";
import { SignInContextProvider } from "./src/contexts/authContext";
import RootNavigator from "./src/navigation/rootNavigation";
import { ThemeProvider } from "@react-navigation/native";

export default function App() {
  return (
    <SignInContextProvider>
      <ThemeProvider>
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={COLORS.statusBar}
          />
          <RootNavigator />
        </View>
      </ThemeProvider>
    </SignInContextProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
