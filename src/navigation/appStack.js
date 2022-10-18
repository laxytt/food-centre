import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/native-stack";
import RestaurantMapScreen from "../pages/RestaurantMapScreen";
import DrawerNavigator from "./DrawerNavigator";

const App = createStackNavigator();

export function AppStack() {
  return (
    <App.Navigator>
      <App.Screen
        name="App"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <App.Screen
        name="RestaurantMapScreen"
        component={RestaurantMapScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </App.Navigator>
  );
}
