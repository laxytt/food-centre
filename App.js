import React from "react";

import { View, Text, StyleSheet, StatusBar } from "react-native";
import { COLORS } from "./src/global/styles";
import LoginScreen from "./src/pages/authScreens/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.statusBar} />
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
