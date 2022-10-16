import React from "react";

import { View, Text, StyleSheet, StatusBar } from "react-native";
import { COLORS } from "./src/global/styles";
import LoginScreen from "./src/pages/authScreens/LoginScreen";
import LoginWelcomeScreen from "./src/pages/authScreens/LoginWelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.statusBar} />
      <LoginWelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
