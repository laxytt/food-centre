import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { COLORS } from "../global/styles";
import { Icon } from "@rneui/themed";
import HomeScreen from "../pages/HomeScreen";
import MyOrdersScreen from "../pages/MyOrdersScreen";
import MyAccountScreen from "../pages/MyAccountScreen";
import { ClientStack } from "./ClientStack";

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
  return (
    <ClientTabs.Navigator
      tabBarOptions={{
        activeTintColor: COLORS.buttons,
      }}
    >
      <ClientTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Icon name="home" type="material" color="red" />,
        }}
      />

      <ClientTabs.Screen
        name="SearchScreen"
        component={ClientStack}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: () => <Icon name="search" type="material" color="red" />,
        }}
      />
      <ClientTabs.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={{
          tabBarLabel: "My Orders",
          tabBarIcon: ({ color, size }) => (
            <Icon name="view-list" type="material" color="red" />
          ),
        }}
      />
      <ClientTabs.Screen
        name="MyAccount"
        component={MyAccountScreen}
        options={{
          tabBarLabel: "My Account",
          tabBarIcon: () => <Icon name="person" type="material" color="red" />,
        }}
      />
    </ClientTabs.Navigator>
  );
}
