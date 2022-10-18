import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, withBadge } from "@rneui/themed";
import { COLORS, PARAMETERS } from "../global/styles";

export default function HomeHeader() {
  const BadgeIcon = withBadge(0)(Icon);

  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 15,
          marginTop: 40,
        }}
      >
        <Icon
          type="material-community"
          name="menu"
          color={COLORS.cardBackground}
          size={32}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <Text
          style={{
            color: COLORS.cardBackground,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Food Centre
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginRight: 15,
          marginTop: 40,
        }}
      >
        <BadgeIcon
          type="material-community"
          name="cart"
          size={35}
          color={COLORS.cardBackground}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: COLORS.buttons,
    height: PARAMETERS.headerHeight,
    justifyContent: "space-between",
  },
});
