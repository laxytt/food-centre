import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from "../pages/SearchScreen";
import SearchResultScreen from "../pages/SearchResultScreen";
import RestaurantHomeScreen from "../pages/RestaurantHomeScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native-stack";
import MenuProductScreen from "../pages/MenuProductScreen";
import PreferenceScreen from "../pages/PreferenceScreen";
import { useNavigation } from "@react-navigation/native";

const ClientSearch = createStackNavigator();

export function ClientStack({ route }) {
  const { navigation } = useNavigation();
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "RestaurantHomeScreen" || "MenuProductScreen") {
      navigation.setOptions({ tabBarVisible: false });
    } else {
      navigation.setOptions({ tabBarVisible: true });
    }
  }, [navigation, route]);

  return (
    <ClientSearch.Navigator>
      <ClientSearch.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientSearch.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientSearch.Screen
        name="RestaurantHomeScreen"
        component={RestaurantHomeScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientSearch.Screen
        name="MenuProductScreen"
        component={MenuProductScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientSearch.Screen
        name="PreferenceScreen"
        component={PreferenceScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </ClientSearch.Navigator>
  );
}
