import React from "react";
import { COLORS, PARAMETERS } from "../global/styles";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";

export default function Header({ title, type }) {
  return (
    <View style={styles.header}>
      <View style={{ marginLeft: 20, marginBottom: 5 }}>
        <Icon
          type="material-community"
          name={type}
          color={COLORS.headerText}
          size={25}
          onPress={() => {}}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: COLORS.buttons,
    height: PARAMETERS.headerHeight,
    alignItems: "flex-end",
  },
  headerText: {
    color: COLORS.headerText,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 30,
    marginBottom: 5,
  },
});
