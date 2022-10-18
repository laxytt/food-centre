import React from "react";

import {
  createNativeStackNavigator,
  TransitionPresets,
} from "@react-navigation/native-stack";
import LoginWelcomeScreen from "../pages/authScreens/LoginWelcomeScreen";
import LoginScreen from "../pages/authScreens/LoginScreen";
import HomeScreen from "../pages/HomeScreen";

const Auth = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="LogInWelcomeScreen"
        component={LoginWelcomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Auth.Navigator>
  );
}
